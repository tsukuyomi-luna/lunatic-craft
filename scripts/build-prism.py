#!/usr/bin/env python3
from __future__ import annotations
import hashlib, json, shutil, tempfile, urllib.request, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "releases" / "lunatic-craft-0.1.0-prism.zip"
PACK_URL = "https://raw.githubusercontent.com/tsukuyomi-luna/lunatic-craft/main/pack.toml"
BOOTSTRAP_URL = "https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar"
BOOTSTRAP_SHA256 = "a8fbb24dc604278e97f4688e82d3d91a318b98efc08d5dbfcbcbcab6443d116c"


def main() -> None:
    OUT.parent.mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory() as td:
        temp = Path(td)
        minecraft = temp / "minecraft"
        minecraft.mkdir()
        bootstrap = minecraft / "packwiz-installer-bootstrap.jar"
        urllib.request.urlretrieve(BOOTSTRAP_URL, bootstrap)
        if BOOTSTRAP_SHA256:
            actual = hashlib.sha256(bootstrap.read_bytes()).hexdigest()
            if actual != BOOTSTRAP_SHA256:
                raise SystemExit(f"bootstrap checksum mismatch: {actual}")
        (temp / "instance.cfg").write_text(
            "[General]\n"
            "name=Lunatic Craft\n"
            "InstanceType=OneSix\n"
            "MCLaunchMethod=LauncherPart\n"
            "OverrideCommands=true\n"
            f'PreLaunchCommand="$INST_JAVA" -jar packwiz-installer-bootstrap.jar {PACK_URL}\n'
            "OverrideMemory=true\n"
            "MinMemAlloc=4096\n"
            "MaxMemAlloc=8192\n"
            "iconKey=Lunatic Craft\n",
            encoding="utf-8",
        )
        (temp / "mmc-pack.json").write_text(json.dumps({
            "formatVersion": 1,
            "components": [
                {"uid": "net.minecraft", "version": "1.20.1", "important": True},
                {"uid": "net.minecraftforge", "version": "47.4.22"},
            ],
        }, indent=2) + "\n", encoding="utf-8")
        shutil.copy2(ROOT / "icon.png", temp / "Lunatic Craft.png")
        if OUT.exists():
            OUT.unlink()
        with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as zf:
            for path in sorted(temp.rglob("*")):
                if path.is_file():
                    zf.write(path, path.relative_to(temp))
    print(OUT)

if __name__ == "__main__":
    main()
