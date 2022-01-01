scoreboard players reset cond_17 sandstone
execute if score @s pos3_z >= @s pos3_z run function warp_creator:area/create/confirmpos/execute_as/if/if/else_6/if
execute unless score cond_17 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else_6/else