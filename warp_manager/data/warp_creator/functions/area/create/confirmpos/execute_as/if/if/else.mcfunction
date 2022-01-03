scoreboard players reset cond_7 sandstone
execute if score @s pos1_x >= @s pos2_x run function warp_creator:area/create/confirmpos/execute_as/if/if/else/if
execute unless score cond_7 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else/else