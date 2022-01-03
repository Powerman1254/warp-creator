scoreboard players reset cond_9 sandstone
execute if score @s pos1_y >= @s pos2_y run function warp_creator:area/create/confirmpos/execute_as/if/if/else_2/if
execute unless score cond_9 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else_2/else