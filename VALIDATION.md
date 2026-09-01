# Validation

## 2026-09-02 / Lunatic Craft 0.1.10

- Added Tinkers' Innovation 3.0.0, Tinkers' Advanced-Core 3.0.0-beta.5, Tinkers' Advanced-Materials 3.0.0-beta.3, Tinkers' Thinking 0.1.6.6.3, Sakura Tinker, and Apotheotic Additions 2.2.2 while retaining Tinkers Integrations and Tweaks
- Added EtST Lib 3.0.0-beta.20 as the required dependency shared by Tinkers' Advanced and Sakura Tinker
- Refreshed the packwiz index with 250 mod and four TaCZ gun-pack metadata entries; the CurseForge client manifest contains 253 unique project IDs and passes complete ZIP integrity testing
- Saved the production world and created a checksum-verified 1.2 GB pre-0.1.10 world/config backup before synchronization
- Sakura Tinker 1.4.2.3 failed dedicated-server initialization by loading `RenderStateShard$EmptyTextureStateShard`; pinned 1.4.1, whose upstream changelog identifies a server fix
- Production synchronized the pinned files, loaded all seven added JARs, reached `Done (5.465s)`, remained active on ports 25565 and 25575, answered RCON, and restarted Discord Integration
- Startup remains usable but reports non-fatal upstream data errors in parts of Sakura Tinker, Tinkers' Advanced-Materials' absent-Thermal advancements, and Apotheotic Additions' TiC affix-loot entries; affected recipes, traits, and loot integrations must not be treated as fully working until checked in game
- Client pack synchronization, multiplayer login, JEI visibility, tool models, material stats, modifiers, recipes, and Apotheosis affix behavior still require interactive validation

## 2026-08-30 / Lunatic Craft 0.1.9

- Added Tinkers Integrations and Tweaks 2.0.25.19 for Botania, Ars Nouveau, Create, Mekanism, Ad Astra, Deeper and Darker, Twilight Forest, and other installed-mod integrations
- Added Twilight Construct 1.0.7 with eight Twilight Forest tool and armor materials
- Added a data-driven Tier 4 Etherium material backed by Enigmatic Legacy ingots and blocks, with generated purple metal textures plus Worldbound and Lightweight traits
- Corrected the authoritative Curios common configuration from ring 4 / charm 2 to ring 6 / charm 4 and removed the ineffective duplicate slot data files; production currently reports ring 4 / charm 3 for shun before this update is restarted
- Refreshed the packwiz index and validated all JSON resources locally
- Dedicated-server loading, recipe/material registration, generated client textures, and multiplayer login are not yet validated

## 2026-08-29 / Lunatic Craft 0.1.8

- Added Baubley Heart Canisters 1.2.0 and L2 Artifacts 2.4.28; L2 Artifacts added its required AttributeFix 21.0.5 dependency
- Added replace-mode Curios slot data intended to set ring slots to six and charm slots to four; the older common configuration remained authoritative until corrected in 0.1.9
- Extended Spice of Life milestones every five foods through 2475 unique foods, preserving +2 hearts per milestone for a configured maximum of 1000 hearts
- Added a KubeJS startup modification that preserves existing food properties while making every statically registered food always edible
- Restored Apotheosis boss announcement range to its 96-block default and set the client-side announcement volume to zero
- Refreshed the packwiz index, verified 241 mod and four TaCZ gun-pack metadata entries with no duplicate external project IDs, exported the CurseForge client archive, and passed a complete ZIP integrity test
- Created and completed a 898.8 MB pre-update production backup before synchronization
- The first production attempt exposed unsupported KubeJS property-assignment syntax; replacing it with the installed build's explicit `getFoodProperties()` / `setFoodProperties()` methods removed all KubeJS startup errors
- Production loaded all three added JARs, kept the requested Spice of Life and Apotheosis values after Forge config validation, reached `Done (5.819s)`, remained active on ports 25565 and 25575, answered RCON, and restarted Discord Integration
- Production currently uses a temporary systemd drop-in pinned to commit `21edd31` because the installer briefly received the previous `main` index after the fix was pushed; remove or advance the pin during the next deployment
- Client pack synchronization, multiplayer login, Curios GUI slot counts, actual full-hunger eating, Heart Canister and L2 Artifact item behavior, and silent Apotheosis announcements still require interactive validation

## 2026-08-23 / Lunatic Craft 0.1.7

- Added Cooking for Blockheads 16.0.15, Clumps 12.0.0.4, Corpse x Curios API Compat 3.1.3, SlashBlade Japanese Addon Pack 1.2.16, and Just Another Void Dimension 5.0.1
- Added the required BaguetteLib 1.1.6 and Trenzalore 3.3.10 dependencies
- Added Cyber Armorer 1.1.5, Create Armorer 1.2.0.1, Applied Armorer 1.1.4.1, and Immersive Armorer 1.2.1 as packwiz-managed files under `tacz/` rather than `mods/`
- Refreshed the packwiz index, verified 238 mod and four TaCZ gun-pack metadata entries with no duplicate external project IDs, exported the CurseForge client archive, and passed a complete ZIP integrity test
- Production packwiz sync installed every pinned JAR and gun-pack ZIP; TaCZ discovered all four new packs and their expected namespaces
- Production remained active on ports 25565 and 25575, reached `Done (5.415s)`, answered RCON, and restarted Discord Integration successfully
- Client launch, multiplayer login, TaCZ gun models and scripts, Cooking for Blockheads UI, SlashBlade items and abilities, and JAVD portal travel still require interactive validation

## 2026-08-23 / Lunatic Craft 0.1.6

- Added Chicken Chunks 1.20.1-2.10.0.100 with its default limits: 400 chunks per loader and 5000 total chunks per player; the existing CodeChickenLib dependency was retained
- Increased the production FTB Chunks force-load limit from 25 to 100 chunks per team
- Refreshed the packwiz index, verified 231 mod metadata entries, exported the CurseForge client archive, confirmed Chicken Chunks project/file IDs, and passed a complete ZIP integrity test
- Production packwiz sync installed the pinned Chicken Chunks JAR; the generated config retained `allowOffline=true`, `chunksPerLoader=400`, and `totalAllowedChunks=5000`
- Production remained active on ports 25565 and 25575, loaded `chickenchunks 2.10.0.100`, reached `Done (5.948s)`, answered RCON, and restarted Discord Integration successfully
- The updated client completed pack sync and shun logged into production successfully; Chicken Chunks GUI/rendering and in-world force-loading behavior still require interactive validation

## 2026-08-22 / Lunatic Craft 0.1.5

- Added Enigmatic Addons 1.2.6 after the initial 0.1.5 deployment; production loaded `enigmaticaddons 1.2.6`, remained active on ports 25565 and 25575, reached `Done (4.975s)`, and answered RCON after the follow-up restart
- Added Apotheosis Modern Ragnarok: Zero 7.0.0, IronsArms 3.0.6, Maxstuff 1.8.3 hotfix, TaCZ Tweaks 2.14.2, and Construction Wand 2.11
- Added Maxstuff's required Endless Ammo 2.0 and TaCZ Tweaks' required YetAnotherConfigLib 3.6.6 dependencies
- Changed Loot Beams from the higher-priority `all_items` mode to `only_rare`, so Common items no longer render beams; this client-side behavior still requires an interactive visual check
- Refreshed the packwiz index and verified 229 external metadata projects with no duplicate CurseForge or Modrinth project IDs
- Exported the CurseForge client archive, confirmed version 0.1.5 with 228 unique CurseForge projects plus the bundled Modrinth override, and passed a complete ZIP integrity test
- Verified no players were connected before restarting production; server-side packwiz sync installed all seven added projects and dependencies
- The production service remained active on ports 25565 and 25575, loaded all added server-side mods at their pinned versions, reached `Done (5.215s)`, answered RCON, and restarted Discord Integration successfully
- Client launch, TaCZ gun and spell behavior, Apotheosis affixes, Construction Wand controls and recipes, EMI display, and multiplayer login still require interactive validation

## 2026-08-20 / Lunatic Craft 0.1.4

- Added SlashBlade: Resharped 1.9.65 for both client and server while retaining the existing playerAnimator dependency and the mod's native recipes and progression requirements
- Refreshed the packwiz index and verified 223 external metadata projects with no duplicate CurseForge or Modrinth project IDs
- Exported the CurseForge client archive, confirmed version 0.1.4 in `manifest.json`, and passed a complete ZIP integrity test
- Verified no players were connected before restarting the production service; server-side packwiz sync installed the checksum-matched SlashBlade JAR
- The production server remained active, reached `Done (4.749s)`, responded over RCON, loaded SlashBlade recipe items during Immersive Engineering recipe analysis, and restarted Discord Integration successfully
- SlashBlade generated its default common config with its own PvP and friendly-fire settings disabled, consistent with the server's existing PvP policy
- Client rendering, key bindings, combos, EMI recipe display, multiplayer login, and combat balance with Apotheosis and L2 Hostility still require interactive validation

## 2026-08-18 / Lunatic Craft 0.1.3

- Removed JourneyMap 6.0.2 and JourneyMap Shared Maps 1.1.0, retaining FTB Chunks 2001.3.8 as the single map and minimap implementation
- Removed the now-unused JourneyMap and Shared Maps configuration files
- Refreshed the packwiz index and verified 222 external metadata projects with no duplicate CurseForge or Modrinth project IDs
- Exported both client and server CurseForge packs; their manifests contain 220 and 194 unique CurseForge projects respectively
- Created and checksum-verified a pre-0.1.3 world/config backup, synchronized the production server, and verified the JourneyMap mods and dedicated configuration files were removed while FTB Chunks remained installed
- Production reached `Done (4.938s)`, remained active on ports `25565` and `25575`, and answered RCON `list`
- FTB Chunks map and minimap rendering remain interactive client checks

## 2026-08-18 / Lunatic Craft 0.1.2

- Added What Are They Up To 1.2.3 and its CoroUtil 1.3.7 dependency on both client and server
- Added the client-only Skin Layers 3D 1.11.2 and Just Enough Resources 1.4.0.247
- Removed Simple Voice Chat from the shared pack definition
- Disabled Loot Beams advanced tooltips and look-triggered nametags while retaining its beams and crouch-triggered nametags
- Refreshed the packwiz index and verified 223 external metadata projects with no duplicate CurseForge or Modrinth project IDs
- Exported both client and server CurseForge packs; their manifests contain 222 and 196 unique CurseForge projects respectively
- Created a pre-0.1.2 world/config backup, synchronized the production server, and verified WATUT and CoroUtil were installed while Simple Voice Chat was removed
- Production reached `Done (4.834s)`, remained active on ports `25565` and `25575`, and answered RCON `list`
- Client rendering, JER integration, multiplayer WATUT state synchronization, and the Loot Beams behavior remain interactive checks

## 2026-08-17 / Lunatic Craft 0.1.0 deployment

- Server-side packwiz sync completed after excluding client-only files
- Removed AllTheLeaks after reproducing its dedicated-server bootstrap crash
- Re-ran the Forge installer after the earlier memory-starved run left incomplete patched libraries
- Production service reached `Done (35.718s)` on a fresh world and remained active with no systemd restarts
- Verified listeners on `25565` and `25575`, and verified RCON with `list`
- Discord Integration loaded the migrated configuration, started successfully, and registered its commands
- Verified generated directories for vanilla, Nether, End, Ad Astra, AE2, Blood Magic, Compact Machines, Deeper and Darker, Fantasy Ending, Iron's Spells, TofuCraft, and Twilight Forest dimensions
- Client launch and a real multiplayer login remain separate interactive checks

## 2026-08-17 / 0.8.3

- Kept Enhanced AI and Enhanced Hordes installed instead of removing either mod
- Disabled Enhanced AI's forced Enderman target teleport, mob-to-target teleport, pearler mobs, miner mobs, x-ray targeting, wall-ignoring Creeper swelling, and Creeper wall breaching
- Disabled Enhanced AI's Animals, Villagers, and Snow Golems modules so friendly mobs retain vanilla behavior
- The complete Enhanced AI 3.3.7.3 common configuration parses as valid TOML and is tracked by packwiz
- Added L2 Weaponry 2.6.3; its required L2 Library 2.5.3 and L2 Complements 2.6.1 dependencies were already installed
- L2 Weaponry adds material-tiered Round Shields that allow sprinting while blocking and Plate Shields with shield-break resistance and timed reflection, alongside its wider weapon set
- A fresh dedicated-server world with L2 Weaponry and the tuned Enhanced AI configuration reached `Done (60.142s)` and shut down cleanly with every dimension saved
- Shield rendering, blocking behavior, and EMI recipe display still require interactive client validation

## 2026-08-17 / 0.8.2

- Added the client-only Controlling 12.0.2 and its Searchables 1.0.3 dependency
- The controls screen can search by binding name, category, or assigned key and filter unbound or conflicting bindings
- CurseForge manifest contains 219 project files with no duplicate project IDs; both new files are present at their pinned Forge 1.20.1 file IDs
- A fresh dedicated-server world without the two client-only additions reached `Done (67.425s)` and shut down cleanly with every dimension saved
- Controlling's screen layout, filtering, and compatibility with Modern UI still require interactive client validation

## 2026-08-17 / 0.8.1

- Added the client-only Overflowing Bars 8.0.1, Pick Up Notifier 8.0.0, Loot Beams: Relooted 1.2.6, Sound Physics Remastered 1.5.1, and Extreme Sound Muffler 3.51
- Overrode `hyperdaimc:hyper/vrx` at the same datapack recipe ID instead of modifying Hyperlink's JAR
- The new 9x9 Creator VRX recipe requires four Infinity Ingots, 28 Neutron Ingots, 13 Chaotic Cores, 12 Antimatter Pellets, seven Infinity Catalysts, six Gaia Ingots, six Ethereal Slates, four Cosmic Hearts, and the original Game Orb
- Pack metadata contains 217 external downloads with no duplicate CurseForge or Modrinth project IDs
- A fresh dedicated-server world loaded the recipe override with no parse error, reached `Done (68.361s)`, and shut down cleanly with every dimension saved
- Overflowing Bars versus Mantle HUD behavior, pickup and loot-beam rendering, sound acoustics, and sound-muffling controls still require interactive client validation

## 2026-08-17 / 0.8.0

- Replaced Xaero's Minimap and Xaero's World Map with JourneyMap 6.0.2
- Added JourneyMap Shared Maps 1.1.0 to synchronize explored map data between players on the same server
- Enabled global terrain sharing; FTB Teams party isolation remains available later through `ftbTeamsOnly`
- Removed JourneyMap's example admin name and UUID from the default server configuration while retaining operator access
- Enabled Enigmatic Legacy's `CursedRingDontTouchMyBees`, exempting bees from the Ring of the Seven Curses' neutral-mob aggression without weakening its other curses
- Fresh dedicated-server world loaded JourneyMap and Shared Maps, reached `Done (67.409s)`, and saved every dimension during shutdown
- JourneyMap client rendering and real multiplayer map synchronization still require interactive validation

## 2026-08-17 / 0.7.9

- Diagnosed the macOS client crash as Cataclysm: Spellbooks 1.2.9 referencing `Ancient_Remnant_Rework_Renderer`, a class no longer present in L_Ender's Cataclysm 3.31
- Removed Cataclysm: Spellbooks and its otherwise unused AzureLib dependency rather than downgrading the main Cataclysm boss mod
- Added Animation Overhaul 1.3.1, Modern UI 3.12.0.1, Better Advancements 0.6.0.73, Toast Control 8.0.3, AllTheLeaks 1.1.1, BadOptimizations 2.4.1, FastSuite 5.1.2, ImmediatelyFast 1.5.5, Packet Fixer 3.3.2, and Smooth Boot 0.0.4
- BetterF3 7.0.2, ModernFix 5.27.72, and spark 1.10.53 were already present
- Replaced XXL Packets with Packet Fixer and William Wythers' Overhauled Overworld with Biomes O' Plenty 19.0.0.96 plus GlitchCore and TerraBlender
- Enabled Enigmatic Legacy's `CursedRingUltraHardcore`, which equips the Ring of the Seven Curses when a new player enters the world
- Fresh dedicated-server world reached `Done (68.811s)` with Biomes O' Plenty loaded, then shut down cleanly with all dimensions saved
- Updated client still requires a real Prism/macOS launch and checks for Modern UI, EMI Japanese IME input, advancement UI, animations, and rendering compatibility

## 2026-08-17 / 0.7.8

- Added Fantasy Construct 1.0.2 for Fantasy Ending and Tinkers' Construct integration
- Metadata contains 204 external downloads: 201 CurseForge manifest entries and three Modrinth files bundled as overrides, with no duplicate project IDs
- Dedicated server loaded Fantasy Construct, reached `Done (12.101s)`, and shut down cleanly with every dimension saved
- Fantasy Construct materials, modifiers, and recipe visibility still require interactive client validation

## 2026-08-17 / 0.7.7

- Added the complete Fantasy Ending client configuration with `Render.Entity.uomChanMode=true`
- Confirmed from Fantasy Ending 2.7.20 bytecode that this setting replaces the Ultimate Order Manager renderer with `UomChanRenderer`
- The configuration parses as valid TOML and preserves all other Fantasy Ending 2.7.20 client defaults
- Actual UOM-chan rendering still requires interactive client validation

## 2026-08-17 / 0.7.6

- Added RFTools Builder, Torchmaster, Nature's Compass, Jade Addons, Simple Backups, Mouse Tweaks, Crafting Tweaks, BetterF3, Enchantment Descriptions, Better P2P, AppliedFlux, PackagedAuto, PackagedAvaritia, and PackagedDraconic; CC:Tweaked was intentionally omitted
- Added AE2 MEGA Things 1.0.8 and its Kotlin for Forge dependency
- Added Cataclysm: Spellbooks 1.2.9 and its AzureLib 3.1.12 dependency
- Added MmmMmmMmmMmm 2.0.12, Fantasy Ending 2.7.20, Hyperlink 1201.2.4, and Fantasy Ending's undeclared EndingLibrary 2.1.19fix dependency
- Marked Mouse Tweaks, BetterF3, and Enchantment Descriptions client-only
- Metadata contains 203 external downloads: 200 CurseForge manifest entries and three Modrinth files bundled as overrides, with no duplicate project IDs
- Dedicated server loaded the remaining additions, reached `Done (8.786s)`, and shut down cleanly with every dimension including Fantasy Ending's `faded_void` saved
- Client UI, AE2 addon screens, new spells, and in-game recipe visibility still require interactive validation

## 2026-08-17 / 0.7.5

- Added Legendary Tooltips 1.4.5 with its Iceberg 1.1.25 and Prism 1.0.5 dependencies
- Removed Integrated Stronghold and YUNG's Better Strongholds because Stellarity already replaces the Stronghold and its Eye of Ender progression
- Did not add a separate Ender Dragon overhaul because Stellarity already replaces that fight; stacking another overhaul would create overlapping boss logic
- Legendary Tooltips and its two dependencies are marked client-only; loading them on a dedicated server was confirmed to fail, while excluding them is clean
- Metadata contains 180 external files with no duplicate CurseForge or Modrinth project IDs
- Dedicated server without the client-only tooltip stack reached `Done (7.931s)` and shut down cleanly with every dimension saved
- Legendary Tooltip rendering and theme appearance still require interactive client validation

## 2026-08-17 / 0.7.4

- Reduced Enigmatic Legacy `MaxSoulCrystalLoss` from 9 to 5, limiting lost-soul maximum-health reduction to 50%
- Set Curios `ring` size to 4 and `charm` size to 2 through `config/curios-common.toml`; these server-side slot defaults sync to clients
- Other Curios slot types remain defined by their existing mod datapacks
- Dedicated server accepted both configuration files, reached `Done (8.434s)`, and shut down cleanly with every dimension saved

## 2026-08-17 / 0.7.3

- Replaced Ad Astra's invalid Mekanism Venus sandstone crushing recipe, which referenced the empty `forge:sandstone/venus_sandstone` tag, with the concrete `ad_astra:venus_sandstone` item
- Disabled Enigmatic Amulet's Extradimensional Vessel so Corpse is the sole death-inventory recovery system
- Kept `MaxSoulCrystalLoss=9` and `SoulCrystalsMode=0`; the Ring of the Seven Curses can cost up to nine Soul Crystals but does not reach the tenth-loss permadeath state, and it does not delete the world
- Replaced caramelChat 1.2.2 with a locally built 1.2.3-SNAPSHOT from upstream PR 55, including the macOS native text-field re-registration fix and follow-up internal-state fix
- The replacement caramelChat JAR was built successfully and its SHA-256 matches the packaged file
- Dedicated server loaded the Mekanism override without the previous incomplete-recipe error, reached `Done (7.459s)`, and shut down cleanly with every dimension saved
- The patched caramelChat JAR and EMI text entry still require interactive validation on macOS

## 2026-08-17 / 0.7.2

- Added AppleSkin 2.5.1, Angel Block Renewed 1.3, XXL Packets 1.0.5, and EMI 1.1.24
- Did not add XL Packets because XXL Packets is its fork and replaces the same packet-size limit
- Kept JEI installed for EMI's documented runtime JEI-plugin compatibility; EMI should hide JEI's UI and become the visible recipe viewer
- Marked AppleSkin and EMI client-only; Angel Block Renewed and XXL Packets remain on both client and server
- Metadata contains 180 external files with no duplicate CurseForge or Modrinth project IDs
- Dedicated server excluded the five client-only mods, reached `Done (7.211s)` with Angel Block Renewed and XXL Packets, then shut down cleanly and saved every dimension
- EMI UI, JEI recipe bridging, the Tinkers fluid display, and actual packet transfer still require interactive client validation

## 2026-08-17 / 0.7.1

- Added Chat Heads 0.15.7 and caramelChat 1.2.2 as client-only mods
- Added Cosmetic Armor Reworked 1.20.1-v1a on both client and server
- Confirmed Botany Trees 9.0.20 was already present and did not add a duplicate
- Metadata contains 176 external files with no duplicate CurseForge or Modrinth project IDs
- Dedicated server excluded Chat Heads, caramelChat, and Oculus, reached `Done (9.013s)` with Cosmetic Armor Reworked, then shut down cleanly and saved every dimension
- Client chat rendering, Japanese IME behavior, and cosmetic armor inventory UI still require interactive validation

## 2026-08-17 / 0.7.0

- Added Ad Astra 1.15.20; RFTools Base 5.0.7, Utility 6.0.7, and Dimensions 11.0.11; Industrial Foregoing 3.5.22; TofuCraft Reload 5.18.4.1; Sakura 1.1.16; StorageBox 3.2.5; and Productive Bees 12.6.0
- Added only Project Red Core, Transmission, and Integration 4.21.0; World, Exploration, Fabrication, and Illumination are not included
- Removed Mystical Agriculture and its Master Infusion Crystal replacement; Cucumber remains because Iron Jetpacks also requires it
- Overrode TofuCraft Reload's three outdated Botany Pots crop recipes to use the current `drops` schema; their parse failures disappeared on the second boot
- CurseForge metadata contains 173 external files with no duplicate project IDs
- KubeJS loaded the remaining five endgame recipe replacements with 0 script errors and 0 warnings
- A new Forge dedicated-server world loaded all 187 reported mods, including Ad Astra and TofuCraft dimensions, reached `Done (104.365s)`, then shut down cleanly and saved every dimension
- The second boot reached `Done (7.894s)` and also shut down cleanly; 12 pre-existing or optional-integration recipe parse warnings remain outside the pack's custom recipes
- Interactive client launch, JEI layouts, Japanese translation coverage for the new mods, and survival balance still require playtesting

## 2026-08-16 / 0.6.1

- Added Create: Central Kitchen 1.5.0 for Create 6.0.8, Create: Diesel Generators 1.3.12, and Ender Storage 2.11.0.188
- Added Japanese Language Pack V42 and All Japanese Translate 1.4.1; the latter supplements major uncovered pack areas including AE2 GuideME, Integrated Dynamics, and several technology/storage mods
- Central Kitchen, Diesel Generators, and Ender Storage each include their own `ja_jp` language file
- CurseForge manifest contains 155 external files with no duplicate project IDs
- Dedicated server reached `Done (5.843s)` with all added mods and the existing six KubeJS recipe replacements, then shut down cleanly
- Resource-pack ordering and actual in-game translation coverage still require interactive client validation

## 2026-08-16 / 0.6.0

- Added `kubejs/server_scripts/endgame_progression.js`; Node syntax validation passed
- Replaced six recipes: Master Infusion Crystal; Wyvern, Awakened, and Chaotic cores; Neutron Collector; Infinity Catalyst
- The replacements gate late-game convenience and endgame components across Immersive Engineering, Mekanism, Powah, Botania, Blood Magic, Ars Nouveau, and Occultism
- KubeJS reported `Added 6 recipes, removed 6 recipes`; the pack script itself loaded with 0 errors and 0 warnings
- CurseForge manifest contains 150 external files with no duplicate project IDs
- Dedicated server reached `Done (7.005s)` on the existing WWOO test world, then shut down cleanly
- Recipe layout and ingredient visibility still require interactive JEI validation

## 2026-08-16 / 0.5.3

- Added Enigmatic Legacy 2.30.1 with Caelus API, Iron Jetpacks 7.0.9, and Fast Leaf Decay 31
- Added Storage Drawers 12.14.3, Trash Cans 1.0.18a, Building Gadgets 2 1.0.8, and Carry On 2.1.2.7
- Added Explorer's Compass 1.4.0, Time in a Bottle 4.0.4, and Spice of Life: Carrot Edition 1.15.1
- Kept Mantle's built-in colored extra-heart renderer instead of adding a second heart-rendering mod
- CurseForge manifest contains 150 external files with no duplicate project IDs
- Dedicated server reached `Done (7.055s)` on the existing WWOO test world with the complete 0.5.3 set, then shut down cleanly

## 2026-08-16 / 0.5.2

- Added AE2 Things 1.2.1, Applied Mekanistics 1.4.3, ME Requester 1.2.1, AE2 Wireless Terminals 15.3.3, and MEGA Cells 2.4.6
- Added Moog's Nether Structures 3.0.0, Moog's End Structures 2.0.3, Integrated Villages 1.3.2, and Integrated Stronghold 1.1.2
- Added client-only Oculus 1.8.0 for shader support with Embeddium
- CurseForge manifest contains 137 external files with no duplicate project IDs
- Dedicated server reached `Done (125.484s)` on a new WWOO world after excluding client-only Oculus, then shut down cleanly
- Oculus shader rendering and the new AE2 add-ons still require interactive client validation

## 2026-08-16 / 0.5.1

- Removed Better Combat; playerAnimator remains for TaCZ third-person animations
- Pinned JEI from 15.49.0.188 to 15.20.0.129 to isolate the Tinkers' Construct fluid-icon texture-atlas regression
- CurseForge manifest contains 127 external files with no duplicate project IDs
- The JEI rendering fix still requires interactive client validation

## 2026-08-16 / 0.5.0

- Removed Bosses of Mass Destruction, Stalwart Dungeons, CERBON's API, and Terralith
- Added William Wythers' Overhauled Overworld 2.0.0, Configured 2.2.3, and TaCZ 1.1.8-hotfix
- TiCEX reported that its `tacz_compat` module loaded
- External pack files: 128
- Loaded mods including bundled libraries: 143
- Dedicated server reached `Done (96.502s)` on a new WWOO world
- Dedicated server shut down cleanly and saved all dimensions
- Configured's GUI, TaCZ rendering and controls, and the TiCEX Blitz Gun still require interactive client validation

## 2026-08-16 / 0.4.0

- Removed Aether, Deep Aether, Bumblezone, and the now-unused TerraBlender dependency
- Added Bosses of Mass Destruction 1.1.2, Stalwart Dungeons 1.2.8, and CERBON's API 1.1.0
- External pack files: 129
- Loaded mods including bundled libraries: 143
- Dedicated server reached `Done (100.266s)` on a new Terralith world
- Dedicated server shut down cleanly and saved all dimensions
- Recipe integration and difficulty configuration are still untouched and need survival playtesting

## 2026-08-16 / 0.3.0

- Replaced Regions Unexplored with Terralith 2.5.4
- Removed Thin Air, Vic's Point Blank, and Simply Swords
- Added Powah! 5.0.11, Flux Networks 7.2.1.15, Tinkers' Construct 3.11.2.166, TiCEX 0.6.1, Mantle, and AddonAPI
- External pack files: 130
- Loaded mods including bundled libraries: 147
- Dedicated server reached `Done (98.175s)` on a new Terralith world
- Dedicated server shut down cleanly and saved all dimensions

### TiCEX note

TiCEX 0.6.1 is a beta. On dedicated-server startup it logs non-fatal errors for tool definitions belonging to optional integrations that are not installed. Its integrations with the installed Mekanism, Draconic Evolution, Re:Avaritia, Create, Iron's Spells, Botania, and Ars Nouveau still require interactive client validation.

## 2026-08-16 / 0.2.0

- Removed Lootr and FTB Quests
- Added FTB Ultimine 2001.1.8, Regions Unexplored 0.5.3.1, and MSS 1.2.7
- Loaded mods including bundled libraries: 144
- Dedicated server reached `Done (87.709s)` on a new Regions Unexplored world
- Dedicated server shut down cleanly and saved all dimensions
- Difficulty configuration is still untouched and needs survival playtesting

## 2026-08-16 / 0.1.0

- Java: Temurin 17.0.20
- Minecraft: 1.20.1
- Forge: 47.4.22
- External pack files: 127
- Loaded mods including bundled libraries: 143 after removing YUNG's Better End Island
- Dedicated server reached `Done (69.117s)` on a new world
- A second boot after removing YUNG's Better End Island reached `Done (6.670s)`
- Dedicated server shut down cleanly and saved all dimensions

### Fix made during validation

Stellarity and YUNG's Better End Island both modify End generation. The server reached `Done`, but YUNG's Better End Island then logged End spike placement errors. YUNG's Better End Island was removed; Stellarity remains as the End overhaul.

### Not yet validated

- Interactive client launch and multiplayer login
- Long-duration chunk generation
- Structure spacing and loot balance
- Combat difficulty with several players
- Recipe and progression balance

### Non-blocking upstream warnings

- IDAS logs missing optional Ice and Fire biome tags and loot entries even though its Ice and Fire structures are disabled.
- Iron's Spells 1.20.1 logs errors for a small number of lore-book loot tables; this is reproduced upstream on 1.20.1 and does not prevent startup.
- Sophisticated Storage logs skipped compatibility recipes for Quark chest variants that are not present.
