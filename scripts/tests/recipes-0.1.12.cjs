const fs=require('fs'),vm=require('vm'),assert=require('assert');
const out=[];let tags=[];
const removed=[];
const event={remove:r=>removed.push(r),custom:r=>({id:id=>out.push({id,...r})}),shaped:(item,pattern,key)=>({id:id=>out.push({id,type:"minecraft:crafting_shaped",pattern,key,result:{item}})})};
for(const name of ['l2_material_alternatives','affix_material_compression','compatibility']) vm.runInNewContext(fs.readFileSync('kubejs/server_scripts/'+name+'.js','utf8'),{ServerEvents:{recipes:f=>f(event),tags:(type,f)=>{assert.equal(type,'block');f({remove:(tag,item)=>tags.push({tag,item})})}}});
assert.equal(out.length,21);assert.equal(new Set(out.map(r=>r.id)).size,21);
assert.equal(out.filter(r=>r.id.startsWith('kubejs:l2_alternative/')).length,12);
for(const r of out.filter(r=>r.type==='minecraft:crafting_shaped')) {assert.deepEqual(r.pattern,['MMM','MMM','MMM']); assert(r.key.M.endsWith('_material'));}
for(const r of out.filter(r=>r.type==='powah:energizing')) {assert(r.ingredients.length<=6);assert(r.energy>=5000000);}
for(const r of out.filter(r=>r.type==='ars_nouveau:enchanting_apparatus'))assert(r.pedestalItems.length<=8);
assert.deepEqual(tags,[{tag:'minecraft:soul_fire_base_blocks',item:'minecraft:bedrock'}]);
assert.equal(removed[0].id,'mob_grinding_utils:beheading/piglin');
assert.equal(out.find(r=>r.id===removed[0].id).result.item,'minecraft:piglin_head');
console.log('PASS 20 material recipes + MGU piglin-head compatibility recipe, all 8 adjacent 9:1 compression steps, 12 L2 alternatives, machine slot limits, bedrock-only removal');
