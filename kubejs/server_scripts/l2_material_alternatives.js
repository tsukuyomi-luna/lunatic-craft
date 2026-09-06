// Additional acquisition routes; original event-based drops remain unchanged.
ServerEvents.recipes(event => {
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "l2complements:blackstone_core"
    },
    "pedestalItems": [
      {
        "item": "minecraft:gilded_blackstone"
      },
      {
        "item": "minecraft:gilded_blackstone"
      },
      {
        "item": "minecraft:ancient_debris"
      },
      {
        "item": "minecraft:ancient_debris"
      },
      {
        "item": "l2complements:piglin_rune"
      }
    ],
    "reagent": [
      {
        "item": "minecraft:nether_star"
      }
    ],
    "sourceCost": 5000
  }).id('kubejs:l2_alternative/blackstone_core')

  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "l2complements:hard_ice"
    },
    "pedestalItems": [
      {
        "item": "minecraft:blue_ice"
      },
      {
        "item": "minecraft:blue_ice"
      },
      {
        "item": "minecraft:powder_snow_bucket"
      },
      {
        "item": "minecraft:echo_shard"
      }
    ],
    "reagent": [
      {
        "item": "minecraft:heart_of_the_sea"
      }
    ],
    "sourceCost": 2000
  }).id('kubejs:l2_alternative/hard_ice')

  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "l2complements:resonant_feather"
    },
    "pedestalItems": [
      {
        "item": "minecraft:echo_shard"
      },
      {
        "item": "minecraft:echo_shard"
      },
      {
        "item": "minecraft:calibrated_sculk_sensor"
      },
      {
        "item": "l2complements:warden_bone_shard"
      }
    ],
    "reagent": [
      {
        "item": "minecraft:feather"
      }
    ],
    "sourceCost": 3000
  }).id('kubejs:l2_alternative/resonant_feather')

  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "minecraft:heart_of_the_sea"
      },
      {
        "item": "minecraft:prismarine_crystals"
      },
      {
        "item": "minecraft:prismarine_crystals"
      },
      {
        "item": "minecraft:prismarine_crystals"
      },
      {
        "item": "minecraft:prismarine_crystals"
      },
      {
        "item": "minecraft:lightning_rod"
      },
      {
        "item": "botania:rune_water"
      }
    ],
    "mana": 12000,
    "output": {
      "item": "l2complements:guardian_eye",
      "count": 1
    }
  }).id('kubejs:l2_alternative/guardian_eye')

  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "l2complements:wind_capture_bottle"
      },
      {
        "item": "botania:rune_air"
      },
      {
        "item": "minecraft:phantom_membrane"
      },
      {
        "item": "minecraft:phantom_membrane"
      }
    ],
    "mana": 10000,
    "output": {
      "item": "l2complements:captured_wind",
      "count": 1
    }
  }).id('kubejs:l2_alternative/captured_wind')

  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "l2complements:wind_capture_bottle"
      },
      {
        "item": "minecraft:shulker_shell"
      },
      {
        "item": "minecraft:shulker_shell"
      },
      {
        "item": "minecraft:ender_pearl"
      }
    ],
    "mana": 10000,
    "output": {
      "item": "l2complements:captured_shulker_bullet",
      "count": 1
    }
  }).id('kubejs:l2_alternative/captured_shulker_bullet')

  event.custom({
    "type": "powah:energizing",
    "ingredients": [
      {
        "item": "minecraft:obsidian"
      },
      {
        "item": "minecraft:obsidian"
      },
      {
        "item": "minecraft:tnt"
      },
      {
        "item": "minecraft:tnt"
      },
      {
        "item": "minecraft:nether_star"
      }
    ],
    "energy": 5000000,
    "result": {
      "item": "l2complements:explosion_shard",
      "count": 1
    }
  }).id('kubejs:l2_alternative/explosion_shard')

  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "l2complements:captured_wind"
      },
      {
        "item": "l2complements:explosion_shard"
      },
      {
        "item": "minecraft:phantom_membrane"
      },
      {
        "item": "minecraft:phantom_membrane"
      },
      {
        "item": "powah:crystal_nitro"
      }
    ],
    "mana": 20000,
    "output": {
      "item": "l2complements:storm_core",
      "count": 1
    }
  }).id('kubejs:l2_alternative/storm_core')

  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "minecraft:phantom_membrane"
      },
      {
        "item": "minecraft:phantom_membrane"
      },
      {
        "item": "minecraft:phantom_membrane"
      },
      {
        "item": "minecraft:phantom_membrane"
      },
      {
        "item": "botania:rune_fire"
      },
      {
        "item": "minecraft:blaze_rod"
      },
      {
        "item": "minecraft:blaze_rod"
      },
      {
        "item": "botania:gaia_ingot"
      }
    ],
    "mana": 25000,
    "output": {
      "item": "l2complements:sun_membrane",
      "count": 1
    }
  }).id('kubejs:l2_alternative/sun_membrane')

  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": false,
    "output": {
      "item": "l2complements:void_eye"
    },
    "pedestalItems": [
      {
        "item": "minecraft:end_crystal"
      },
      {
        "item": "minecraft:echo_shard"
      },
      {
        "item": "bloodmagic:etherealslate"
      }
    ],
    "reagent": [
      {
        "item": "minecraft:ender_eye"
      }
    ],
    "sourceCost": 10000
  }).id('kubejs:l2_alternative/void_eye')

  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      {
        "item": "minecraft:ghast_tear"
      },
      {
        "item": "l2complements:soul_fire_charge"
      },
      {
        "item": "l2complements:soul_fire_charge"
      },
      {
        "item": "botania:rune_fire"
      }
    ],
    "mana": 12000,
    "output": {
      "item": "l2complements:soul_flame",
      "count": 1
    }
  }).id('kubejs:l2_alternative/soul_flame')

  event.custom({
    "type": "powah:energizing",
    "ingredients": [
      {
        "item": "minecraft:nether_star"
      },
      {
        "item": "mekanism:ultimate_control_circuit"
      },
      {
        "item": "mekanism:ultimate_control_circuit"
      },
      {
        "item": "enderio:reinforced_obsidian_block"
      },
      {
        "item": "enderio:reinforced_obsidian_block"
      }
    ],
    "energy": 10000000,
    "result": {
      "item": "l2complements:force_field",
      "count": 1
    }
  }).id('kubejs:l2_alternative/force_field')
})
