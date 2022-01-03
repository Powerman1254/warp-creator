scoreboard players reset cond_28 sandstone
execute if score @s y >= @s y run function warp_creator:area/create/confirmpos/execute_as/if/else/else_5/if
execute unless score cond_28 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else_5/else