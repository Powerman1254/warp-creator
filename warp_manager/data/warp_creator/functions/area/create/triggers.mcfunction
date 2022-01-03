scoreboard players enable @a[tag=Builder] pos1
execute as @a[scores={pos1=1}] at @s run function warp_creator:area/create/pos1
scoreboard players reset @a[scores={pos1=1}] pos1
scoreboard players enable @a[tag=Builder] pos2
execute as @a[scores={pos2=1}] at @s run function warp_creator:area/create/pos2
scoreboard players reset @a[scores={pos2=1}] pos2
scoreboard players enable @a[tag=Builder] pos3
execute as @a[scores={pos3=1}] at @s run function warp_creator:area/create/pos3
scoreboard players reset @a[scores={pos3=1}] pos3
scoreboard players enable @a[tag=Builder] reset
execute as @a[scores={reset=1}] at @s run function warp_creator:reset
scoreboard players reset @a[scores={reset=1}] reset
scoreboard players enable @a[tag=Builder] remove
execute as @a[scores={remove=1}] at @s run tellraw @s ["",{"text":"Remove","bold":true,"color":"dark_red","clickEvent":{"action":"suggest_command","value":"/kill @e[type=armor_stand,tag=area,name=<name here>]"}},{"text":" area\n"},{"text":"Remove","bold":true,"color":"dark_red","clickEvent":{"action":"suggest_command","value":"/kill @e[type=minecraft:armor_stand,tag=warp,scores={pos1_x=<x of lowest corner point>,pos1_y=<y of lowest corner point>,pos1_z=<z of lowest corner point>}]"}},{"text":" warp"}]
scoreboard players reset @a[scores={reset=1}] remove