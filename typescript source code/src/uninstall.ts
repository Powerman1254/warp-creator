import { abs, forceload, kill, MCFunction, scoreboard, Selector, tellraw } from "sandstone";

//uninstall function

MCFunction('warp_creator:uninstall', () => {
	scoreboard.objectives.remove('warp.0')
	scoreboard.objectives.remove('warp.255')
	scoreboard.objectives.remove('pos1_x')
	scoreboard.objectives.remove('pos1_y')
	scoreboard.objectives.remove('pos1_z')
	scoreboard.objectives.remove('pos2_x')
	scoreboard.objectives.remove('pos2_y')
	scoreboard.objectives.remove('pos2_z')
	scoreboard.objectives.remove('area_confirm')
	scoreboard.objectives.remove('warp_confirm')
	scoreboard.objectives.remove('pos1')
	scoreboard.objectives.remove('pos2')
	scoreboard.objectives.remove('pos3')
	scoreboard.objectives.remove('reset')
	scoreboard.objectives.remove('drawer')
	scoreboard.objectives.remove('remove')

	//displays instructions on how to correctly remove module
	tellraw(Selector('@s'),["",{"text":"Uninstall","bold":true,"color":"gold"},{"text":" successful","bold":true,"color":"dark_green"},{"text":"\nPlease "},{"text":"remove","underlined":true,"color":"dark_red"},{"text":" the "},{"text":"warp creator","underlined":true,"color":"dark_green"},{"text":" namespace "},{"text":"before reloading","bold":true,"underlined":true,"color":"dark_red"},{"text":"\nor the pack will re enable"}])
})

MCFunction('warp_manager:uninstall', () => {
	scoreboard.objectives.remove('max_x')
	scoreboard.objectives.remove('max_y')
	scoreboard.objectives.remove('max_z')
	scoreboard.objectives.remove('min_x')
	scoreboard.objectives.remove('min_y')
	scoreboard.objectives.remove('min_z')
	scoreboard.objectives.remove('pos3_rx')
	scoreboard.objectives.remove('pos3_ry')
	scoreboard.objectives.remove('pos3_x')
	scoreboard.objectives.remove('pos3_y')
	scoreboard.objectives.remove('pos3_z')
	scoreboard.objectives.remove('UUID')
	scoreboard.objectives.remove('x')
	scoreboard.objectives.remove('y')
	scoreboard.objectives.remove('z')

	//displays instructions on how to correctly remove module
	tellraw(Selector('@s'),["",{"text":"Uninstall","bold":true,"color":"gold"},{"text":" successful","bold":true,"color":"dark_green"},{"text":"\nPlease "},{"text":"remove","underlined":true,"color":"dark_red"},{"text":" the "},{"text":"warp manager","underlined":true,"color":"dark_green"},{"text":" namespace "},{"text":"before reloading","bold":true,"underlined":true,"color":"dark_red"},{"text":"\nor the pack will re enable"}])

	//removes armor stands
	kill(Selector('@e', {type: 'minecraft:armor_stand', tag: 'Area'}))
	kill(Selector('@e', {type: 'minecraft:armor_stand', tag: 'Warp'}))
	forceload.remove(abs(0,0))
	tellraw(Selector('@s'), {"text":"All areas removed"})
})
