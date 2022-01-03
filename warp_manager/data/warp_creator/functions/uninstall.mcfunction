scoreboard objectives remove warp.0
scoreboard objectives remove warp.255
scoreboard objectives remove pos1_x
scoreboard objectives remove pos1_y
scoreboard objectives remove pos1_z
scoreboard objectives remove pos2_x
scoreboard objectives remove pos2_y
scoreboard objectives remove pos2_z
scoreboard objectives remove area_confirm
scoreboard objectives remove warp_confirm
scoreboard objectives remove pos1
scoreboard objectives remove pos2
scoreboard objectives remove pos3
scoreboard objectives remove reset
scoreboard objectives remove drawer
scoreboard objectives remove remove
tellraw @s ["",{"text":"Uninstall","bold":true,"color":"gold"},{"text":" successful","bold":true,"color":"dark_green"},{"text":"\nPlease "},{"text":"remove","underlined":true,"color":"dark_red"},{"text":" the "},{"text":"warp creator","underlined":true,"color":"dark_green"},{"text":" namespace "},{"text":"before reloading","bold":true,"underlined":true,"color":"dark_red"},{"text":"\nor the pack will re enable"}]