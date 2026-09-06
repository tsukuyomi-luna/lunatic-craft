// Stellarity makes bedrock burn with SoulFireBlock, which Ender IO cannot process.
// Keep every other soul-fire base intact; do not change drops or fire tick settings.
ServerEvents.tags('block', event => {
  event.remove('minecraft:soul_fire_base_blocks', 'minecraft:bedrock')
})

// MGU's Tinkers integration still refers to a removed piglin-head item.
// Minecraft 1.20.1 provides the head natively.
ServerEvents.recipes(event => {
  event.remove({ id: 'mob_grinding_utils:beheading/piglin' })
  event.custom({
    type: 'mob_grinding_utils:beheading',
    entity: 'minecraft:piglin',
    result: { item: 'minecraft:piglin_head' }
  }).id('mob_grinding_utils:beheading/piglin')
})
