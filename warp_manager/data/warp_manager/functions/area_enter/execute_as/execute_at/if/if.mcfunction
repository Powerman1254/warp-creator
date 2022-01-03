data modify storage area_manager:temp CustomName set from entity @s CustomName
execute as @p run title @s title {"nbt":"CustomName","storage":"area_manager:temp","interpret":true}
execute store result score @p UUID0 run data get entity @s UUID[0]
execute store result score @p UUID1 run data get entity @s UUID[1]
execute store result score @p UUID2 run data get entity @s UUID[2]
execute store result score @p UUID3 run data get entity @s UUID[3]