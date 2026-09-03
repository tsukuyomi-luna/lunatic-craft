ServerEvents.recipes(event => {
  // Apotheosis: upgrade each reforging table through the added rarity tiers.
  // This mirrors Ancient Reforging's 1/2/3 material pattern while requiring
  // the previous table, so Esoteric reforging cannot bypass earlier tiers.
  event.shaped('esotericreforging:esoteric_reforging_table', [
    ' E ',
    'HTH',
    'AAA'
  ], {
    E: 'apotheotic_additions:esoteric_material',
    H: 'apotheotic_additions:heirloom_material',
    T: 'ancientreforging:ancient_reforging_table',
    A: 'apotheotic_additions:artifact_material'
  }).id('kubejs:esoteric_reforging_table')

  // Draconic Evolution: each tier proves progress in another engineering or magic branch.
  event.remove({ id: 'draconicevolution:components/wyvern_core' })
  event.shaped('draconicevolution:wyvern_core', [
    'EDE',
    'DND',
    'EDE'
  ], {
    E: 'immersiveengineering:component_electronic_adv',
    D: 'draconicevolution:draconium_core',
    N: '#forge:nether_stars'
  }).id('kubejs:wyvern_core')

  event.remove({ id: 'draconicevolution:components/awakened_core' })
  event.custom({
    type: 'draconicevolution:fusion_crafting',
    catalyst: { item: 'botania:gaia_ingot' },
    ingredients: [
      { item: 'draconicevolution:wyvern_core' },
      { item: 'draconicevolution:wyvern_core' },
      { item: 'draconicevolution:wyvern_core' },
      { item: 'draconicevolution:wyvern_core' },
      { tag: 'forge:ingots/draconium_awakened' },
      { tag: 'forge:ingots/draconium_awakened' },
      { tag: 'forge:ingots/draconium_awakened' },
      { tag: 'forge:ingots/draconium_awakened' },
      { item: 'mekanism:ultimate_control_circuit' },
      { item: 'mekanism:ultimate_control_circuit' },
      { item: 'powah:crystal_nitro' },
      { item: 'powah:crystal_nitro' }
    ],
    result: { item: 'draconicevolution:awakened_core' },
    tier: 'WYVERN',
    total_energy: 25000000
  }).id('kubejs:awakened_core')

  event.remove({ id: 'draconicevolution:components/chaotic_core' })
  event.custom({
    type: 'draconicevolution:fusion_crafting',
    catalyst: { item: 'draconicevolution:large_chaos_frag' },
    ingredients: [
      { item: 'draconicevolution:awakened_core' },
      { item: 'draconicevolution:awakened_core' },
      { item: 'draconicevolution:awakened_core' },
      { item: 'draconicevolution:awakened_core' },
      { item: 'draconicevolution:large_chaos_frag' },
      { item: 'draconicevolution:large_chaos_frag' },
      { item: 'draconicevolution:large_chaos_frag' },
      { item: 'draconicevolution:large_chaos_frag' },
      { item: 'powah:nitro_crystal_block' },
      { item: 'powah:nitro_crystal_block' },
      { item: 'botania:gaia_ingot' },
      { item: 'botania:gaia_ingot' },
      { item: 'mekanism:ultimate_control_circuit' },
      { item: 'mekanism:ultimate_control_circuit' }
    ],
    result: { item: 'draconicevolution:chaotic_core' },
    tier: 'DRACONIC',
    total_energy: 500000000
  }).id('kubejs:chaotic_core')

  // Re:Avaritia: collectors and the catalyst represent several completed branches.
  event.remove({ id: 'avaritia:neutron_collector' })
  event.custom({
    type: 'avaritia:shaped_table',
    category: 'equipment',
    key: {
      C: { item: 'avaritia:crystal_matrix_ingot' },
      I: { item: 'minecraft:iron_block' },
      Q: { item: 'minecraft:quartz_block' },
      R: { item: 'minecraft:redstone_block' },
      M: { item: 'mekanism:ultimate_control_circuit' },
      P: { item: 'powah:nitro_crystal_block' },
      G: { item: 'botania:gaia_ingot' }
    },
    pattern: [
      'IIQQPQQII',
      'I QQQQQ I',
      'I  RMR  I',
      'C RRRRR C',
      'I RMGMR I',
      'C RRRRR C',
      'I  RMR  I',
      'I   P   I',
      'IIICICIII'
    ],
    result: { item: 'avaritia:neutron_collector' },
    show_notification: true,
    tier: 4
  }).id('kubejs:neutron_collector')

  event.remove({ id: 'avaritia:infinity_catalyst' })
  event.custom({
    type: 'avaritia:infinity_catalyst',
    category: 'misc',
    group: 'default',
    ingredients: [
      { item: 'minecraft:bedrock' },
      { item: 'avaritia:crystal_matrix_ingot' },
      { item: 'avaritia:neutron_ingot' },
      { item: 'avaritia:cosmic_meatballs' },
      { item: 'avaritia:ultimate_stew' },
      { item: 'avaritia:endest_pearl' },
      { item: 'avaritia:record_fragment' },
      { item: 'draconicevolution:chaotic_core' },
      { item: 'mekanism:ultimate_control_circuit' },
      { item: 'botania:gaia_ingot' },
      { item: 'bloodmagic:etherealslate' },
      { item: 'ars_nouveau:wilden_tribute' },
      { item: 'occultism:iesnium_ingot' }
    ]
  }).id('kubejs:infinity_catalyst')
})
