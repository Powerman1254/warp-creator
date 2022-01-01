scoreboard players reset cond_30 sandstone
execute if score @s pos1_z >= @s pos2_z run function warp_creator:area/create/confirmpos/execute_as/if/else/else_6/if
execute unless score cond_30 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else_6/else