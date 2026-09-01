# Changelog

## 0.1.10 - 2026-09-02

- Tinkers' Innovation 3.0.0、Tinkers' Thinking 0.1.6.6.3、Sakura Tinker 1.4.1を追加
- Tinkers' Advanced-Core 3.0.0-beta.5とTinkers' Advanced-Materials 3.0.0-beta.3を追加し、EtST Lib 3.0.0-beta.20を必須依存として追加
- Apotheotic Additions 2.2.2を追加
- 既存のTinkers Integrations and Tweaksは残し、各addonを併用

## 0.1.9 - 2026-08-30

- Tinkers Integrations and Tweaks 2.0.25.19を追加し、Botania、Ars Nouveau、Create、Mekanism、Ad Astra、Deeper and Darker等とTinkers' Constructの連携を拡張
- Twilight Construct 1.0.7を追加し、Fiery、Knightmetal、Steeleaf、Ironwood、Phantom、Naga、Carminite、Red ThreadをTiC素材化
- Enigmatic LegacyのEtheriumを独自のTier 4 TiC素材として追加し、軽量性と火炎・溶岩耐性を付与
- Curiosの古いcommon configがring 4枠・charm 2枠へ上書きしていた問題を修正し、基準値をring 6枠・charm 4枠へ統一

## 0.1.8 - 2026-08-29

- Baubley Heart Canisters 1.2.0とL2 Artifacts 2.4.28を追加
- L2 Artifactsの必須依存としてAttributeFix 21.0.5を追加
- Curiosのring slotを6、charm slotを4へ固定
- Spice of Lifeの節目を5種類ごとのまま最大1000ハートまで拡張し、全食料を満腹時にも食べられるよう変更
- Apotheosis bossの出現通知範囲を既定の96 blockへ戻し、出現SEの音量を0へ変更

## 0.1.7 - 2026-08-23

- Cooking for Blockheads 16.0.15、Clumps 12.0.0.4、Corpse x Curios API Compat 3.1.3を追加
- TaCZ gun packとしてCyber Armorer 1.1.5、Create Armorer 1.2.0.1、Applied Armorer 1.1.4.1、Immersive Armorer 1.2.1を追加
- SlashBlade Japanese Addon Pack 1.2.16を追加
- Just Another Void Dimension 5.0.1を追加
- 必須依存のBaguetteLib 1.1.6とTrenzalore 3.3.10を追加

## 0.1.6 - 2026-08-23

- Chicken Chunks 1.20.1-2.10.0.100をデフォルト制限のまま追加

## 0.1.5 - 2026-08-22

- Enigmatic Addons 1.2.6を追加
- Apotheosis Modern Ragnarok: Zero 7.0.0、IronsArms 3.0.6、Maxstuff 1.8.3 hotfix、TaCZ Tweaks 2.14.2を追加
- Maxstuffの必須依存としてTaCZ Endless Ammo 2.0、TaCZ Tweaksの必須依存としてYetAnotherConfigLib 3.6.6を追加
- Construction Wand 2.11を追加
- Loot BeamsをRare以上だけに限定し、Common itemにはbeamを表示しないよう変更

## 0.1.4 - 2026-08-20

- SlashBlade: Resharped 1.9.65を追加
- 抜刀剣本来の撃破数・精錬・Proud Soul・boss dropによる進行は変更せず、既存のApotheosisやL2 Hostilityを含むcombat環境でplaytestする方針

## 0.1.3 - 2026-08-18

- FTB Chunksと重複していたJourneyMapを削除
- JourneyMap Shared Mapsと専用設定も削除

## 0.1.2 - 2026-08-18

- What Are They Up To、Skin Layers 3D、Just Enough Resourcesを追加
- Simple Voice Chatを削除
- Loot Beamsの地面アイテムへ視線を合わせた時に出るtooltipとnametagを無効化

## 0.1.1 - 2026-08-18

- Quarkの全recipe自動解除を無効化し、Stellarityのspellbookがlogin時に誤発動する問題を修正

## 0.1.0 - 2026-08-17

最初のLunatic Craft版

- 旧開発名Luna Kitchen Sinkから改名し、versionを0.1.0へreset
- packwizをclientとserverの共通配布元に採用
- 七呪の指輪を新規playerの標準装備に設定
- JourneyMap Shared Mapsで探索済み地形を共有
- Discord Integration ForgeでMinecraftとDiscordのchatを連携
- Enhanced AIの強制teleport、壁越し索敵、block破壊、友好mob変更を無効化
- L2 Weaponry、音響・HUD・操作性・安定化modを追加
- dedicated serverをcrashさせるAllTheLeaksを除外
- Java 17、packwiz同期、Discord連携を含むsystemd運用を整備
- Hyperlink Creator VRXを複数modの終盤素材を使う9x9 recipeへ変更
