// Stellarity makes bedrock burn with SoulFireBlock, which Ender IO cannot process.
// Keep every other soul-fire base intact; do not change drops or fire tick settings.
ServerEvents.tags('block', event => {
  event.remove('minecraft:soul_fire_base_blocks', 'minecraft:bedrock')
})
