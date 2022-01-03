scoreboard players reset cond_13 sandstone
execute if score @s pos3_x >= @s pos3_x run function warp_creator:area/create/confirmpos/execute_as/if/if/else_4/if
execute unless score cond_13 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else_4/else