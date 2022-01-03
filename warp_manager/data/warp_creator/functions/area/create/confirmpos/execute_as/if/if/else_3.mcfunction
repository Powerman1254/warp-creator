scoreboard players reset cond_11 sandstone
execute if score @s pos1_z >= @s pos2_z run function warp_creator:area/create/confirmpos/execute_as/if/if/else_3/if
execute unless score cond_11 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else_3/else