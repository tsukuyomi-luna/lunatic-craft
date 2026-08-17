# サーバー運用ガイド

Lunatic Craftのserverもclientと同じ`pack.toml`を参照します。packwiz-installerのserver side filterによりclient専用modは導入されません

## Runtime

- Java 17
- Forge 47.4.22
- 12 GiB hostでは`-Xms4G -Xmx9G`を基準にし、OSとoff-heap用のmemoryを残す
- Forgeは`@libraries/net/minecraftforge/forge/1.20.1-47.4.22/unix_args.txt`から起動する
- worldとconfigを変更する前にbackupを取る
- clientとserverは同じLunatic Craft versionを使う

## 同期

server directoryで次を実行します

```bash
/usr/lib/jvm/java-17-openjdk-amd64/bin/java \
  -jar packwiz-installer-bootstrap.jar -g -s server \
  https://raw.githubusercontent.com/tsukuyomi-luna/lunatic-craft/main/pack.toml
```

pack更新後も同じcommandで差分同期できます。同期中はMinecraft serverを同時起動しないでください

## systemd

運用hostでは`lunatic-craft.service`を使います。serviceは起動前にpackwiz同期を行い、その後Java 17を明示してForgeを起動します

```ini
[Unit]
Description=Lunatic Craft Minecraft Forge Server
Wants=network-online.target
After=network-online.target
Conflicts=minecraft.service

[Service]
Type=simple
User=minecraft
Group=minecraft
WorkingDirectory=/opt/minecraft/lunatic-craft
Environment=HOME=/opt/minecraft
ExecStartPre=/usr/lib/jvm/java-17-openjdk-amd64/bin/java -jar packwiz-installer-bootstrap.jar -g -s server https://raw.githubusercontent.com/tsukuyomi-luna/lunatic-craft/main/pack.toml
ExecStart=/usr/lib/jvm/java-17-openjdk-amd64/bin/java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.4.22/unix_args.txt nogui
Restart=on-failure
RestartSec=15
TimeoutStartSec=20min
TimeoutStopSec=2min
KillSignal=SIGINT
UMask=0027
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
```

既存serverも同じ`25565`を使うため、両serviceを同時に起動しないでください

## 更新手順

1. playerへ停止予告
2. RCONで`save-all flush`を実行
3. serverを停止
4. worldと主要configをbackup
5. pack定義を更新してGitHubへpush
6. `lunatic-craft.service`を起動し、packwiz同期とForge起動を行う
7. journalの`Done (`、service状態、RCON、接続を確認

大きなworld生成modの変更時は既存worldへ適用せず、新規worldで検証します
