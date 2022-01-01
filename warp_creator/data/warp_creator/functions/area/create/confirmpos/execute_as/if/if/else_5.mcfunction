scoreboard players reset cond_15 sandstone
execute if score @s pos3_y >= @s pos3_y run function warp_creator:area/create/confirmpos/execute_as/if/if/else_5/if
execute unless score cond_15 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else_5/else