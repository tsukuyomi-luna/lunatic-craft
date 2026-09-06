execute if entity @e[type=minecraft:ender_pearl,tag=stellarity.pearl_advancement,distance=100..,limit=1,sort=arbitrary] run advancement grant @s only stellarity:adventure/beam_me_up
execute unless entity @e[type=minecraft:ender_pearl,tag=stellarity.pearl_advancement,limit=1,sort=arbitrary] run tag @s remove stellarity.pearl_advancement_pending
