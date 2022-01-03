summon minecraft:armor_stand ~ ~ ~ {CustomNameVisible:1b,NoGravity:1b,Invulnerable:1b}
tag @e[type=minecraft:armor_stand, sort=nearest, limit=1] add Area
scoreboard players reset cond_42 sandstone
execute if score @s pos1_x >= @s pos2_x run function warp_creator:area/create/confirm/if
execute unless score cond_42 sandstone matches 0.. run function warp_creator:area/create/confirm/else
scoreboard players reset cond_43 sandstone
execute if score @s pos1_z >= @s pos2_z run function warp_creator:area/create/confirm/if_2
execute unless score cond_43 sandstone matches 0.. run function warp_creator:area/create/confirm/else_2
scoreboard players reset @s pos1_x
scoreboard players reset @s pos2_x
scoreboard players reset @s pos1_y
scoreboard players reset @s pos2_y
scoreboard players reset @s pos1_z
scoreboard players reset @s pos2_z
scoreboard players reset @s warp_confirm
scoreboard players reset @s area_confirm