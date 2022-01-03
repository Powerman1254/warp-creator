execute at @s run particle minecraft:happy_villager ~ ~ ~ 0 0 0 0 1 force @a
execute at @s run tp ~ ~ ~1
scoreboard players add anon_8yzJoUog_16 sandstone 1
execute if score anon_8yzJoUog_16 sandstone < lengthz drawer run function warp_creator:area/create/confirmpos/execute_as/if/if/execute_as_2/while_5