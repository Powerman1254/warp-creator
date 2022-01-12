scoreboard objectives remove max_x
scoreboard objectives remove max_y
scoreboard objectives remove max_z
scoreboard objectives remove min_x
scoreboard objectives remove min_y
scoreboard objectives remove min_z
scoreboard objectives remove pos3_rx
scoreboard objectives remove pos3_ry
scoreboard objectives remove pos3_x
scoreboard objectives remove pos3_y
scoreboard objectives remove pos3_z
scoreboard objectives remove UUID
scoreboard objectives remove x
scoreboard objectives remove y
scoreboard objectives remove z
tellraw @s ["",{"text":"Uninstall","bold":true,"color":"gold"},{"text":" successful","bold":true,"color":"dark_green"},{"text":"\nPlease "},{"text":"remove","underlined":true,"color":"dark_red"},{"text":" the "},{"text":"warp manager","underlined":true,"color":"dark_green"},{"text":" namespace "},{"text":"before reloading","bold":true,"underlined":true,"color":"dark_red"},{"text":"\nor the pack will re enable"}]
kill @e[tag=Area, type=minecraft:armor_stand]
kill @e[tag=Warp, type=minecraft:armor_stand]
forceload remove 0 0
tellraw @s {"text":"All areas removed"}