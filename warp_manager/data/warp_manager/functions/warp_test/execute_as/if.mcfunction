summon minecraft:marker ~ ~ ~
tag @e[type=minecraft:marker, sort=nearest, limit=1] add warp
execute store result entity @e[tag=warp, type=minecraft:marker, sort=nearest, limit=1] Pos[0] double 0.01 run scoreboard players get @s pos3_x
execute store result entity @e[tag=warp, type=minecraft:marker, sort=nearest, limit=1] Pos[1] double 0.01 run scoreboard players get @s pos3_y
execute store result entity @e[tag=warp, type=minecraft:marker, sort=nearest, limit=1] Pos[2] double 0.01 run scoreboard players get @s pos3_z
execute store result entity @e[tag=warp, type=minecraft:marker, sort=nearest, limit=1] Rotation[0] float 0.01 run scoreboard players get @s pos3_rx
execute store result entity @e[tag=warp, type=minecraft:marker, sort=nearest, limit=1] Rotation[1] float 0.01 run scoreboard players get @s pos3_ry
execute as @p at @e[tag=warp, type=minecraft:marker, limit=1] facing ^ ^ ^1 run tp @p @e[tag=warp, type=minecraft:marker, limit=1]
kill @e[tag=warp, type=minecraft:marker, limit=1]