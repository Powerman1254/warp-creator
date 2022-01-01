execute at @s run particle minecraft:happy_villager ~ ~ ~ 0 0 0 0 1 force @a
execute at @s run tp ~ ~ ~1
scoreboard players add anon_8yzJoUog_31 sandstone 1
execute if score anon_8yzJoUog_31 sandstone < lengthz drawer run function warp_creator:area/create/confirmpos/execute_as/if/else/execute_as/while_8