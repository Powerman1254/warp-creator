scoreboard players set cond_31 sandstone 0
execute unless score @s pos2_x matches 0.. unless score @s pos2_x matches ..0 run scoreboard players set cond_31 sandstone 1
scoreboard players set cond_32 sandstone 0
execute unless score @s pos1_x matches ..0 unless score @s pos1_x matches 0.. run scoreboard players set cond_32 sandstone 1
execute unless score cond_31 sandstone matches 1 unless score cond_32 sandstone matches 1 run function warp_creator:area/create/confirmpos/execute_as/if
scoreboard players set cond_34 sandstone 0
execute unless score @s pos2_x matches 0.. unless score @s pos2_x matches ..0 run scoreboard players set cond_34 sandstone 1
scoreboard players set cond_35 sandstone 0
execute unless score @s pos1_x matches ..0 unless score @s pos1_x matches 0.. run scoreboard players set cond_35 sandstone 1
scoreboard players reset cond_33 sandstone
execute unless score cond_34 sandstone matches 1 unless score cond_35 sandstone matches 1 unless score @s pos3_x matches ..0 unless score @s pos3_x matches 0.. unless score @s area_confirm matches 1 run function warp_creator:area/create/confirmpos/execute_as/if_2
scoreboard players set cond_36 sandstone 0
execute unless score @s pos3_x matches ..0 unless score @s pos3_x matches 0.. run scoreboard players set cond_36 sandstone 1
scoreboard players set cond_37 sandstone 0
execute unless score @s pos2_x matches 0.. unless score @s pos2_x matches ..0 run scoreboard players set cond_37 sandstone 1
scoreboard players set cond_38 sandstone 0
execute unless score @s pos1_x matches ..0 unless score @s pos1_x matches 0.. run scoreboard players set cond_38 sandstone 1
execute unless score cond_36 sandstone matches 1 unless score cond_37 sandstone matches 1 unless score cond_38 sandstone matches 1 unless score cond_33 sandstone matches 0.. unless score @s warp_confirm matches 1 run function warp_creator:area/create/confirmpos/execute_as/else_if