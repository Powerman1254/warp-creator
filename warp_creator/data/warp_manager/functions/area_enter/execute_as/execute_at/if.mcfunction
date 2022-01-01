scoreboard players set cond_48 sandstone 0
execute if score @s UUID0 = @p UUID0 if score @s UUID1 = @p UUID1 if score @s UUID2 = @p UUID2 run scoreboard players set cond_48 sandstone 1
execute unless score cond_48 sandstone matches 1 run function warp_manager:area_enter/execute_as/execute_at/if/if