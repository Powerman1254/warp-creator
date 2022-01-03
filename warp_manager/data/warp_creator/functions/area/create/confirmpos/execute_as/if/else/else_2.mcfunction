scoreboard players reset cond_22 sandstone
execute if score #0 warp >= #255 warp run function warp_creator:area/create/confirmpos/execute_as/if/else/else_2/if
execute unless score cond_22 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else_2/else