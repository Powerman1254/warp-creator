scoreboard players set cond_18 sandstone 0
execute unless score @s pos3_x matches ..0 unless score @s pos3_x matches 0.. run scoreboard players set cond_18 sandstone 1
scoreboard players reset cond_5 sandstone
execute unless score cond_18 sandstone matches 1 run function warp_creator:area/create/confirmpos/execute_as/if/if
execute unless score cond_5 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else