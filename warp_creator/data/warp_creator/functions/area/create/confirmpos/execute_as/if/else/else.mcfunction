scoreboard players reset cond_20 sandstone
execute if score @s pos1_x >= @s pos2_x run function warp_creator:area/create/confirmpos/execute_as/if/else/else/if
execute unless score cond_20 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else/else