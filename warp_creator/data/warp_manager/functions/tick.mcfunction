execute as @a store result score @s x run data get entity @s Pos[0]
execute as @a store result score @s y run data get entity @s Pos[1]
execute as @a store result score @s z run data get entity @s Pos[2]
execute as @e[tag=Area, type=minecraft:armor_stand] store result score @s UUID0 run data get entity @s UUID[0]
execute as @e[tag=Area, type=minecraft:armor_stand] store result score @s UUID1 run data get entity @s UUID[1]
execute as @e[tag=Area, type=minecraft:armor_stand] store result score @s UUID2 run data get entity @s UUID[2]
execute as @e[tag=Area, type=minecraft:armor_stand] store result score @s UUID3 run data get entity @s UUID[3]
function warp_manager:area_enter
function warp_manager:warp_test