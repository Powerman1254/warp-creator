tellraw @s ["",{"text":"Valid posses detected","bold":true,"color":"gold"},{"text":"\n"},{"text":"create new warp? ","color":"yellow"},{"text":"confirm","color":"dark_green","clickEvent":{"action":"run_command","value":"/function warp_creator:warp/create/confirm"}}]
scoreboard players set @s warp_confirm 1
scoreboard players set cond_33 sandstone 1