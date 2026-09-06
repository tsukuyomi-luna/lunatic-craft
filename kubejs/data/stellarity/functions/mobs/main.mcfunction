## Hallow Mobs
# Pixies
execute as @e[tag=!stellarity.pixie,tag=!stellarity.aware,type=vex,predicate=stellarity:locations/biomes/in_the_hallow] at @s run function stellarity:mobs/pixie/check

# Slay Queen ✨✨✨✨✨
# (Empress of Light)
execute as @e[tag=stellarity.eol.spawn_animation,type=marker] at @s run function stellarity:mobs/eol/animations/spawn/loop
execute as @e[tag=stellarity.eol,type=vindicator] at @s run function stellarity:mobs/eol/main

# Dragon stuff
execute as @e[type=ender_dragon] at @s run function stellarity:mobs/dragon/main
execute as @e[tag=stellarity.boss_drop,type=item] at @s run particle end_rod ~ ~ ~ .2 .2 .2 0.011 1 force @a[distance=..96]

# Gloop Froggo protection
execute as @e[tag=stellarity.gloop,type=slime] at @s if entity @e[type=frog,distance=..4,limit=1,sort=arbitrary] run effect give @s resistance 1 5 true

# Replace Skeletons with either Husks or Strays in certain biomes
execute as @e[tag=!stellarity.aware,type=skeleton,predicate=stellarity:locations/biomes/in_end_wilds] at @s run function stellarity:mobs/wild_husk/spawn
execute as @e[tag=!stellarity.aware,type=skeleton,predicate=stellarity:locations/biomes/in_frosted_hills] at @s run function stellarity:mobs/frosted_stray/spawn

execute as @e[tag=!stellarity.aware,tag=!stellarity.flesh_piglin,type=zombified_piglin,predicate=stellarity:locations/biomes/in_flesh_tundra] run function stellarity:mobs/flesh_piglin/convert

execute as @e[tag=!stellarity.aware,tag=!stellarity.buffed,type=#stellarity:stat_buff,predicate=stellarity:locations/in_the_end] run function stellarity:mobs/stat_buff/main

execute as @e[tag=!stellarity.aware,type=zombie,predicate=stellarity:locations/biomes/in_warped_marsh] at @s run function stellarity:mobs/warped_marsh_zombie_despawn

# Villagers
execute as @e[tag=!stellarity.villager.aware,type=villager,predicate=stellarity:locations/in_end_village] at @s run function stellarity:mobs/villager/check
