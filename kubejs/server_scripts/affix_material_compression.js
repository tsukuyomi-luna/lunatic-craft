// Nine of the immediately lower rarity make one higher material; no reverse recipe.
ServerEvents.recipes(event => {
  const tiers = [
    "apotheosis:common_material",
    "apotheosis:uncommon_material",
    "apotheosis:rare_material",
    "apotheosis:epic_material",
    "apotheosis:mythic_material",
    "apotheosis:ancient_material",
    "apotheotic_additions:artifact_material",
    "apotheotic_additions:heirloom_material",
    "apotheotic_additions:esoteric_material"
  ]
  for (let i = 0; i < tiers.length - 1; i++) {
    event.shaped(tiers[i + 1], ['MMM', 'MMM', 'MMM'], { M: tiers[i] })
      .id('kubejs:affix_compression/' + tiers[i + 1].split(':')[1])
  }
})
