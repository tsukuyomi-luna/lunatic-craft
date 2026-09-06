function stellarity:items/armors/main
function stellarity:items/spellbooks/main
function stellarity:items/fish/main

effect clear @a[tag=stellarity.perm_buffs.robust_potato] poison

# Dragonblade
# Entity loops happen every 2nd tick
execute as @a[predicate=stellarity:items/holding_dragonblade,predicate=stellarity:utils/player/is_sneaking] at @s as @e[tag=stellarity.items.dragonblade.punch_ready,distance=0.001..5] at @s run function stellarity:items/dragonblade/punch/progress
execute as @e[type=!#stellarity:invalid_targets,scores={stellarity.items.dragonblade.until_punch_reset=1..}] run function stellarity:items/dragonblade/punch/progress_reset_countdown
execute as @e[tag=stellarity.items.dragonblade.smthgram_aec,type=area_effect_cloud] at @s rotated as @s run function stellarity:items/dragonblade/punch/special_fx/smthgram
execute as @e[type=!#stellarity:invalid_targets,scores={stellarity.items.dragonblade.misc_cooldown=1}] run scoreboard players set @s stellarity.items.dragonblade.misc_cooldown 0

# Clockwork Crossbow
# Moved to a 6 tick clock

# Sharanga
execute as @a[scores={stellarity.misc.shot_bow=1},predicate=stellarity:items/holding_sharanga] at @s run function stellarity:items/sharanga/shoot
execute as @e[tag=stellarity.spectral_bolt,type=spectral_arrow] at @s run function stellarity:items/sharanga/arrow_loop

# Prismatic Punch
execute as @e[tag=stellarity.prismatic_blast,type=marker] at @s run function stellarity:items/prismatic_punch/blast_loop

# Sariel
execute as @e[tag=stellarity.sariel.heal_orb,type=marker] at @s anchored eyes run function stellarity:items/sariel/orb_loop

# Sabrewing
execute as @a[scores={stellarity.misc.shot_bow=1,stellarity.items.sabrewing.charge=60..},predicate=stellarity:items/holding_sabrewing] at @s run function stellarity:items/sabrewing/shoot
execute as @a[scores={stellarity.items.sabrewing.until_charge_reset=1..}] run function stellarity:items/sabrewing/reset_charge_countdown
execute as @e[tag=stellarity.items.sabrewing.arrow,type=#arrows] at @s run function stellarity:items/sabrewing/charged_shots/loop

# Duskberry
execute as @e[tag=stellarity.duskberry_cloud,type=area_effect_cloud] at @s run function stellarity:items/duskberry/as_aec

# Starstruck Carcanet
execute as @e[tag=stellarity.carcanet.star,type=marker] at @s run function stellarity:items/starstruck_carcanet/star_loop

# Spirit Dagger
execute as @a[predicate=stellarity:items/spirit_dagger/holding,predicate=stellarity:items/spirit_dagger/looking_at_spirit] run function stellarity:items/spirit_dagger/charge/progress
execute as @a[scores={stellarity.items.spirit_dagger.until_consume_reset=1..}] run function stellarity:items/spirit_dagger/charge/reset_countdown

# Prismatic Pearl
execute as @a[tag=stellarity.prismatic_pearl.holding,scores={stellarity.misc.used_ender_pearl=1..}] at @s run function stellarity:items/prismatic_pearl/throw
tag @a[tag=stellarity.prismatic_pearl.holding] remove stellarity.prismatic_pearl.holding
execute as @a[predicate=stellarity:items/holding_prismatic_pearl] run tag @s add stellarity.prismatic_pearl.holding
execute as @e[tag=stellarity.prismatic_pearl,type=ender_pearl] at @s run function stellarity:items/prismatic_pearl/trail

# Zephyr
execute as @e[tag=stellarity.zephyr.wind,type=marker] at @s anchored eyes run function stellarity:items/zephyr/wind_loop

# Ender Insignia
execute as @a[predicate=stellarity:items/holding_ender_insignia,predicate=stellarity:utils/player/is_sneaking,tag=!stellarity.ender_insignia.active] run tag @s add stellarity.ender_insignia.active
execute as @a[tag=stellarity.ender_insignia.active] at @s run function stellarity:items/ender_insignia/loop

# Pandora's Barrel
execute as @e[tag=stellarity.pandoras_barrel.armor_stand,type=armor_stand] at @s positioned ~ ~1.7 ~ run function stellarity:items/pandoras_barrel/animation/progress

# Tamaris
execute as @a[predicate=stellarity:items/holding_tamaris] at @s if entity @e[tag=stellarity.items.tamaris.executable,type=!#stellarity:invalid_targets,distance=..16,limit=1,sort=arbitrary] run function stellarity:items/tamaris/holding_loop
execute as @a[tag=stellarity.items.tamaris.doing_execute] at @s run function stellarity:items/tamaris/execute/animation/progress

# Soaring Insignia
execute as @a[predicate=stellarity:items/holding_insignia] run function stellarity:items/soaring_insignia/loop
execute as @a[predicate=!stellarity:items/holding_insignia,tag=stellarity.insignia.flying] run function stellarity:items/soaring_insignia/force_stop

# Kaleidoscope
execute as @a[predicate=stellarity:items/holding_kaleidoscope] run function stellarity:items/kaleidoscope/loop
execute as @a[predicate=!stellarity:items/holding_kaleidoscope,scores={stellarity.items.kaleidoscope.charge=1..}] run function stellarity:items/kaleidoscope/reset_charge
