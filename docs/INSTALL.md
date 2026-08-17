# クライアント導入ガイド

## 必要なもの

- Prism Launcher
- Java 17
- 8 GiB以上の空きメモリを推奨

## 初回導入

1. GitHub Releasesから`lunatic-craft-0.1.0-prism.zip`を取得する
2. Prism Launcherで`インスタンスを追加`を開く
3. `zipからインポート`へzipを指定する
4. instanceを起動する

起動前に同梱のpackwiz-installer-bootstrapが公開中のpack定義を読み、必要なmodとconfigを同期します

## 更新

普段どおり同じinstanceを起動するだけです。追加・更新・削除されたファイルはMinecraft起動前に反映されます

`saves`、`screenshots`、個人の`options.txt`はpackの管理対象外なので維持されます

## 注意

- 新規world向けです。既存worldへ途中導入しないでください
- Javaは17を指定してください
- 初回起動はdownloadと生成処理のため時間がかかります
- 更新中にPrismを強制終了しないでください
