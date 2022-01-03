execute at @s run particle minecraft:happy_villager ~ ~ ~ 0 0 0 0 1 force @a
execute at @s run tp ~1 ~ ~
scoreboard players add anon_8yzJoUog_0 sandstone 1
execute if score anon_8yzJoUog_0 sandstone < lengthx drawer run function warp_creator:area/create/confirmpos/execute_as/if/if/execute_as/while