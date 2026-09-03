# Progression and Difficulty Plan

This is the working plan for survival testing. The first endgame recipe pass is implemented in 0.6.0; combat tuning and the remaining progression gates still need playtesting.

## Goals

- Keep the opening playable without turning every night into a death loop.
- Make factories, magic, exploration, and combat support one another.
- Gate power spikes and cross-mod shortcuts rather than making every recipe expensive.
- Put Draconic Evolution and Re:Avaritia at the end of a multi-mod progression.
- Preserve several valid routes through the midgame.

## Proposed stages

### 1. Workshop

- Vanilla, Create, Tinkers' Construct, early Ars Nouveau, and basic storage remain easy to enter.
- SlashBlade: Resharped starts with its native wooden and bamboo blades; named blades keep their built-in kill, refine, Proud Soul, and boss requirements until combat playtesting shows a concrete progression skip.
- FTB Ultimine stays useful, but its block count and hunger cost should prevent effortless early quarrying.
- TaCZ ammunition should consume real metal and chemical infrastructure rather than being disposable on day one.

### 2. Powered base

- Immersive Engineering and early Powah provide the first stable power systems.
- Applied Energistics 2, Mekanism, and major automation begin here.
- Flux Networks should require an established power and material-processing base so that it does not erase cable and logistics progression immediately.

### 3. Cross-mod engineering

- Advanced Mekanism, stronger magic, TiCEX reconstruction tools, and higher Productive Bees species require materials from more than one branch.
- Important upgrades should use a small number of meaningful components, not repeated compressed ingot walls.
- Selected dungeon and boss drops become reusable progression components, with alternatives where random structure generation could block a world.

### 4. Draconic tier

- Wyvern equipment sits at the transition into late game.
- Awakened equipment requires high-end power, advanced processing, and boss or dimension progression.
- Chaotic equipment is reserved for after the major exploration and magic branches have been completed.

### 5. Infinity tier

- Re:Avaritia's Infinity Catalyst combines tokens or components representing factory, magic, exploration, boss combat, and extreme energy production.
- Creative items remain final rewards, not ingredients required to continue playing.

## Combat tuning

- Start with normal early-game health and damage, then scale after elapsed world time and player progression.
- Configure L2 Hostility as the main scaling system instead of letting L2 Hostility, Enhanced AI, and Enhanced Hordes all multiply raw stats independently.
- Use Enhanced AI mainly for behavior changes.
- Keep hordes as occasional events with advance warning, not constant background pressure.
- Increase structure and boss danger more than ordinary overworld mobs so exploration feels intentional.
- Test with two players before raising multiplayer scaling.

### Implemented in 0.6.0

- Wyvern Core uses Immersive Engineering advanced electronics, while Awakened and Chaotic cores cross Mekanism, Powah, Botania, and Draconic Evolution tiers.
- Neutron Collector requires high-end Mekanism, Powah, and Botania components without changing the Extreme Crafting Table itself.
- Infinity Catalyst additionally proves completion of Draconic Evolution, Mekanism, Botania, Blood Magic, Ars Nouveau, and Occultism.

## First recipe targets

- Draconic Evolution Wyvern, Awakened, and Chaotic cores
- Re:Avaritia Neutron Collector, Extreme Crafting Table, and Infinity Catalyst
- Productive Bees high-value resource bees and simulation upgrades
- TiCEX reconstruction components
- Powah reactors and Flux Networks entry items
- TaCZ workbench and ammunition economy
- FTB Ultimine limits and hunger cost

## Proposed L2 Complements material alternatives

These are proposals only for a later recipe pass. The original event-based acquisition methods remain enabled until the whole set is tested together.

- `blackstone_core`: combine gilded blackstone, ancient debris, a Piglin Rune, and a Nether Star. This preserves Nether and Piglin progression without requiring the exact Incarceration kill.
- `hard_ice`: combine blue ice, powdered snow, a Heart of the Sea, and an Echo Shard. This keeps the cold, aquatic, and Deep Dark themes without the Drowned-in-powdered-snow setup.
- `resonant_feather`: combine a feather, Echo Shards, a calibrated sculk sensor, and a Warden Bone Shard. This keeps Warden/sonic progression but removes the chicken survival trick.
- `guardian_eye`: combine a Heart of the Sea, prismarine crystals, a lightning rod, and a Botania Rune of Water. This replaces the Elder Guardian lightning last-hit condition with monument and magic progression.
- `captured_wind`: combine a Wind Capturing Bottle with a Botania Rune of Air and Phantom Membranes. This removes the exact flight-speed check while retaining flight and air materials.
- `captured_shulker_bullet`: combine a Wind Capturing Bottle, shulker shells, and an ender pearl. This retains End progression without catching a moving projectile.
- `explosion_shard`: combine obsidian, TNT, and a Nether Star through a high-energy recipe rather than ordinary 3x3 crafting. This replaces the damage-threshold stunt without making the shard cheap.
- `storm_core`: combine Captured Wind, an Explosion Shard, Phantom Membranes, and a Powah Nitro Crystal. This keeps both wind and explosion ancestry without a precise explosion kill.
- `sun_membrane`: combine Phantom Membranes, a Botania Rune of Fire, blaze materials, and a Gaia Ingot. This keeps it late-game without building above the height limit.
- `void_eye`: combine an Eye of Ender, an End Crystal, an Echo Shard, and a Blood Magic Ethereal Slate. This preserves End/void and magic progression without a below-the-world kill.
- `soul_flame`: combine a Ghast Tear, Soul Fire Charges, and a Botania Rune of Fire. This removes the circular soul-flame kill setup while still requiring Nether combat.
- `force_field`: combine a Nether Star, reinforced obsidian, and a high-tier Mekanism control circuit. This replaces the bow-only Wither last hit with boss and engineering progression.

Prefer Ars Nouveau enchanting-apparatus, Botania runic-altar, Mekanism processing, or Draconic fusion recipes where the named ingredient belongs to that branch. Avoid making all alternatives shapeless crafting recipes.

## Guardrails

- Do not globally multiply recipe costs.
- Do not require one rare structure or one non-renewable drop with no fallback.
- Do not let Productive Bees or Botany Pots generate progression-gating materials before the corresponding stage is reached.
- Keep recipe changes centralized in KubeJS and document every removed or replaced recipe.
- Change one progression stage at a time and validate recipes in JEI after each batch.
