tellraw @s ["",{"text":"Valid posses detected","bold":true,"color":"gold"},{"text":"\n"},{"text":"create new area? ","color":"yellow"},{"text":"Confirm","color":"dark_green","clickEvent":{"action":"run_command","value":"/function warp_creator:area/create/confirm"}}]
scoreboard players set @s area_confirm 1
scoreboard players set cond_33 sandstone 1