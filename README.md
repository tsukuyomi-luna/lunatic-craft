# Lunatic Craft

![Lunatic Craft icon](icon.png)

Minecraft 1.20.1 / Forge 47.4.22向けの、工業・魔術・探索・ボス・終盤クラフトを横断するmodpackです

七呪の指輪を着けた状態から始まり、CreateやAE2の自動化、複数系統の魔術、構造物とディメンション探索を経て、Draconic EvolutionとRe:Avaritiaの終盤へ進みます。GregTechは含みません

## バージョン

- Lunatic Craft 0.1.8
- Minecraft 1.20.1
- Forge 47.4.22
- Java 17

## 導入

Prism Launcher向けの初回導入zipを[Releases](https://github.com/tsukuyomi-luna/lunatic-craft/releases/latest)から取得し、`インスタンスを追加 → zipからインポート`で読み込んでください

以後は起動前にpackwiz-installerが差分を同期します。更新のたびに新しいinstanceを作る必要はありません

詳しい手順は[クライアント導入ガイド](docs/INSTALL.md)を参照してください

## 構成

- 工業・物流 — Create、Mekanism、Immersive Engineering、Industrial Foregoing、AE2、Ender IO、RFTools、Project Red、Tinkers' Construct
- 魔術 — Ars Nouveau、Iron's Spells 'n Spellbooks、Botania、Blood Magic、Occultism、Enigmatic Legacy
- 探索 — Biomes O' Plenty、Twilight Forest、Ad Astra、Deeper and Darker、Stellarity、各種構造物mod
- 敵・終盤 — L2 Hostility、Enhanced AI、Enhanced Hordes、Cataclysm、Draconic Evolution、Re:Avaritia
- 生活・マルチ — Productive Bees、Farmer's Delight、Discord Integration Forge、What Are They Up To、FTB Teams / Chunks

完全な一覧は[MOD一覧](docs/MODLIST.md)、設計中の進行は[PROGRESSION_PLAN.md](PROGRESSION_PLAN.md)にあります

## サーバー

同じpackwiz定義からclient専用modを除いて同期できます。構築・更新手順は[サーバー運用ガイド](docs/SERVER.md)を参照してください

## 現在の検証範囲

- packwiz indexと配布zipの整合性
- Forge dedicated serverの新規world起動と全dimension保存
- custom recipeの読込

macOS clientでの日本語IME、画面表示、実際のマルチ参加、レシピ進行と難易度は継続してplaytestします

## 権利

各mod・resource packの権利と配布条件は、それぞれの作者と配布元に帰属します。このrepositoryはpackwizのmetadataとLunatic Craft独自の設定・scriptを管理します
