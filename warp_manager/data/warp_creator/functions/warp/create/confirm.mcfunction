summon minecraft:armor_stand ~ ~ ~ {CustomNameVisible:1b,NoGravity:1b,Invulnerable:1b}
tag @e[type=minecraft:armor_stand, sort=nearest, limit=1] add Warp
scoreboard players reset cond_39 sandstone
execute if score @s pos1_x >= @s pos2_x run function warp_creator:warp/create/confirm/if
execute unless score cond_39 sandstone matches 0.. run function warp_creator:warp/create/confirm/else
scoreboard players reset cond_40 sandstone
execute if score @s pos1_z >= @s pos2_z run function warp_creator:warp/create/confirm/if_2
execute unless score cond_40 sandstone matches 0.. run function warp_creator:warp/create/confirm/else_2
scoreboard players reset cond_41 sandstone
execute if score @s pos1_y >= @s pos2_y run function warp_creator:warp/create/confirm/if_3
execute unless score cond_41 sandstone matches 0.. run function warp_creator:warp/create/confirm/else_3
scoreboard players operation @e[tag=Warp, type=minecraft:armor_stand, limit=1, sort=nearest] pos3_x = @s pos3_x
scoreboard players operation @e[tag=Warp, type=minecraft:armor_stand, limit=1, sort=nearest] pos3_y = @s pos3_y
scoreboard players operation @e[tag=Warp, type=minecraft:armor_stand, limit=1, sort=nearest] pos3_z = @s pos3_z
scoreboard players operation @e[tag=Warp, type=minecraft:armor_stand, limit=1, sort=nearest] pos3_rx = @s pos3_rx
scoreboard players operation @e[tag=Warp, type=minecraft:armor_stand, limit=1, sort=nearest] pos3_ry = @s pos3_ry
execute as @e[type=minecraft:armor_stand, sort=nearest, limit=1] at @s run tp 0 -64 0
execute as @e[type=minecraft:armor_stand, sort=nearest, limit=1] at @s run tag @s add confirmed
scoreboard players reset @s pos1_x
scoreboard players reset @s pos2_x
scoreboard players reset @s pos3_x
scoreboard players reset @s pos1_y
scoreboard players reset @s pos2_y
scoreboard players reset @s pos3_y
scoreboard players reset @s pos1_z
scoreboard players reset @s pos2_z
scoreboard players reset @s pos3_z
scoreboard players reset @s pos3_rx
scoreboard players reset @s pos3_ry
scoreboard players reset @s warp_confirm
scoreboard players reset @s area_confirm