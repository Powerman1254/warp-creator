scoreboard players reset cond_6 sandstone
execute if score @s pos1_x = @s pos2_x run function warp_creator:area/create/confirmpos/execute_as/if/if/if
execute unless score cond_6 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else
scoreboard players reset cond_8 sandstone
execute if score @s pos1_y = @s pos2_y run function warp_creator:area/create/confirmpos/execute_as/if/if/if_2
execute unless score cond_8 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else_2
scoreboard players reset cond_10 sandstone
execute if score @s pos1_z = @s pos2_z run function warp_creator:area/create/confirmpos/execute_as/if/if/if_3
execute unless score cond_10 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else_3
scoreboard players operation lengthx drawer = Pos2x drawer
scoreboard players operation lengthx drawer -= Pos1x drawer
scoreboard players add lengthx drawer 1
scoreboard players operation lengthy drawer = Pos2y drawer
scoreboard players operation lengthy drawer -= Pos1y drawer
scoreboard players add lengthy drawer 1
scoreboard players operation lengthz drawer = Pos2z drawer
scoreboard players operation lengthz drawer -= Pos1z drawer
scoreboard players add lengthz drawer 1
summon minecraft:marker ~ ~ ~ {Tags:['draw']}
execute as @e[tag=draw, type=minecraft:marker, limit=1] at @s run function warp_creator:area/create/confirmpos/execute_as/if/if/execute_as
scoreboard players reset cond_12 sandstone
execute if score @s pos3_x = @s pos3_x run function warp_creator:area/create/confirmpos/execute_as/if/if/if_4
execute unless score cond_12 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else_4
scoreboard players reset cond_14 sandstone
execute if score @s pos3_y = @s pos3_y run function warp_creator:area/create/confirmpos/execute_as/if/if/if_5
execute unless score cond_14 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else_5
scoreboard players reset cond_16 sandstone
execute if score @s pos3_z = @s pos3_z run function warp_creator:area/create/confirmpos/execute_as/if/if/if_6
execute unless score cond_16 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/if/else_6
scoreboard players operation lengthx drawer = Pos2x drawer
scoreboard players operation lengthx drawer -= Pos1x drawer
scoreboard players add lengthx drawer 1
scoreboard players operation lengthy drawer = Pos2y drawer
scoreboard players operation lengthy drawer -= Pos1y drawer
scoreboard players add lengthy drawer 1
scoreboard players operation lengthz drawer = Pos2z drawer
scoreboard players operation lengthz drawer -= Pos1z drawer
scoreboard players add lengthz drawer 1
summon minecraft:marker ~ ~ ~ {Tags:['draw']}
execute as @e[tag=draw, type=minecraft:marker, limit=1] at @s run function warp_creator:area/create/confirmpos/execute_as/if/if/execute_as_2
scoreboard players set cond_5 sandstone 1