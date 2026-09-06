#!/usr/bin/env python3
"""Generate conservative, source-pinned function overrides; no timing changes."""
import hashlib, json, re, sys, zipfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
jar=Path(sys.argv[1]); z=zipfile.ZipFile(jar)
HOT={'main','items/main','mobs/main','utils/main','mobs/stronghold/main'}
def parts(s):
    out=[];start=0;depth=0;quote=False;escape=False
    for i,c in enumerate(s):
        if escape:escape=False;continue
        if c=='\\':escape=True;continue
        if c=='"':quote=not quote
        if quote:continue
        if c in '[{':depth+=1
        if c in ']}':depth-=1
        if c==',' and depth==0:out.append(s[start:i]);start=i+1
    out.append(s[start:]);return out
# Deliberately exclude nested NBT/selector data and all predicates for existence changes.
rx=re.compile(r'@(e|a)\[([^\[\]\n]*)\]')
audit=[]
for name in z.namelist():
    if not name.startswith('data/stellarity/functions/') or not name.endswith('.mcfunction'):continue
    rel=name.removeprefix('data/stellarity/functions/').removesuffix('.mcfunction')
    original=z.read(name).decode().replace('\r\n','\n');lines=[];changes=[]
    for lineno,line in enumerate(original.splitlines(),1):
        before=line
        if not line.lstrip().startswith('#'):
            def patch(m):
                opts=parts(m[2]);new=opts[:];prefix=line[:m.start()]
                existence=(m[1]=='e' and re.search(r'\b(?:if|unless) entity $',prefix) and 'store ' not in line and 'predicate=' not in m[2] and 'nbt=' not in m[2] and 'sort=random' not in m[2] and ' run ' in line[m.end():])
                if existence:
                    new=[x for x in new if not x.startswith(('limit=','sort='))]+['limit=1','sort=arbitrary']
                    # Boolean existence only: never touch execute-as, targeting or stored counts.
                    assert sorted(x for x in opts if not x.startswith(('limit=','sort=')))==sorted(x for x in new if not x.startswith(('limit=','sort=')))
                hot=rel in HOT or rel.startswith('loops/')
                # Only tag checks commute ahead of pure type/location checks. No random/custom predicates.
                predicates=[x for x in new if x.startswith('predicate=')]
                pure=all(x.startswith('predicate=stellarity:locations/') for x in predicates)
                if hot and pure and 'nbt=' not in m[2] and any(x.startswith('tag=') for x in new):
                    reordered=[x for x in new if x.startswith('tag=')]+[x for x in new if not x.startswith('tag=')]
                    assert sorted(reordered)==sorted(new)
                    new=reordered
                if new==opts:return m[0]
                return '@'+m[1]+'['+','.join(new)+']'
            line=rx.sub(patch,line)
        if before!=line:changes.append({'line':lineno,'before':before,'after':line})
        lines.append(line)
    if changes:
        output='\n'.join(lines)+'\n';dst=ROOT/'kubejs'/name;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_text(output)
        audit.append({'file':name,'original_sha256':hashlib.sha256(z.read(name)).hexdigest(),'changes':changes})
manifest={'source_jar':jar.name,'source_sha256':hashlib.sha256(jar.read_bytes()).hexdigest(),'files':audit}
(ROOT/'docs/stellarity-selector-optimization.json').write_text(json.dumps(manifest,indent=2)+'\n')
print(len(audit),'files',sum(len(a['changes']) for a in audit),'changed lines')
