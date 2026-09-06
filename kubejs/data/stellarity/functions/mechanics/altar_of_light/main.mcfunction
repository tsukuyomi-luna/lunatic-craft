execute as @e[type=item,distance=..1.5,tag=!stellarity.rerolled,nbt={Item:{tag:{stellarity.special_item:"treasure_head"}}}] run function stellarity:mechanics/altar_of_light/reroll

execute unless entity @e[type=vindicator,tag=stellarity.eol,limit=1,sort=arbitrary] unless entity @e[type=marker,tag=stellarity.eol.spawn_animation,limit=1,sort=arbitrary] as @e[type=item,distance=..1.5,nbt={Item:{tag:{stellarity.special_item:"pixie_dust"}}}] run function stellarity:mechanics/altar_of_light/spawn_empress
