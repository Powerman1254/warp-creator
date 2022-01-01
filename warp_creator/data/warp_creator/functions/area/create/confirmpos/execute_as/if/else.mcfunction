scoreboard players reset cond_19 sandstone
execute if score @s pos1_x = @s pos2_x run function warp_creator:area/create/confirmpos/execute_as/if/else/if
execute unless score cond_19 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else
scoreboard players reset cond_21 sandstone
execute if score #world warp.0 = #world warp.255 run function warp_creator:area/create/confirmpos/execute_as/if/else/if_2
execute unless score cond_21 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else_2
scoreboard players reset cond_23 sandstone
execute if score @s pos1_z = @s pos2_z run function warp_creator:area/create/confirmpos/execute_as/if/else/if_3
execute unless score cond_23 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else_3
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
execute as @e[tag=draw, type=minecraft:marker, limit=1] at @s run function warp_creator:area/create/confirmpos/execute_as/if/else/execute_as
scoreboard players reset cond_25 sandstone
execute if score @s pos1_x = @s pos2_x run function warp_creator:area/create/confirmpos/execute_as/if/else/if_4
execute unless score cond_25 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else_4
scoreboard players reset cond_27 sandstone
execute if score @s y = @s y run function warp_creator:area/create/confirmpos/execute_as/if/else/if_5
execute unless score cond_27 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else_5
scoreboard players reset cond_29 sandstone
execute if score @s pos1_z = @s pos2_z run function warp_creator:area/create/confirmpos/execute_as/if/else/if_6
execute unless score cond_29 sandstone matches 0.. run function warp_creator:area/create/confirmpos/execute_as/if/else/else_6
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
execute as @e[tag=draw, type=minecraft:marker, limit=1] at @s run function warp_creator:area/create/confirmpos/execute_as/if/else/execute_as_2