scoreboard players reset cond_22 sandstone
execute if score #world warp.0 >= #world warp.255 run function warp_creator:area/create/confirmpos/execute_as/if/else/else_2/if
execute unless score cond_22 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else_2/else