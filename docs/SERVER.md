# サーバー運用ガイド

Lunatic Craftのserverもclientと同じ`pack.toml`を参照します。packwiz-installerのserver side filterによりclient専用modは導入されません

## 同期

server directoryで次を実行します

```bash
java -jar packwiz-installer-bootstrap.jar -g -s server \
  https://raw.githubusercontent.com/tsukuyomi-luna/lunatic-craft/main/pack.toml
```

pack更新後も同じcommandで差分同期できます。同期後にserverを再起動してください

## Runtime

- Java 17
- Forge 47.4.22
- `java -Xms8G -Xmx11G -jar forge-server.jar nogui`を目安に、実際のhost容量へ合わせる
- worldとconfigを変更する前にbackupを取る
- clientとserverは同じLunatic Craft versionを使う

## 更新手順

1. playerへ停止予告
2. saveを実行
3. server停止
4. worldと主要configをbackup
5. packwiz-installerで同期
6. server起動、logと接続を確認

大きなworld生成modの変更時は既存worldへ適用せず、新規worldで検証します
