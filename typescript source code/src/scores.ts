import { Objective } from "sandstone"

//initialize all scores then export

//create variables for saving armor stand
const min_x = Objective.create('min_x')
const max_x = Objective.create('max_x')
const min_y = Objective.create('min_y')
const max_y = Objective.create('max_y')
const min_z = Objective.create('min_z')
const max_z = Objective.create('max_z')
const UUID = [Objective.create('UUID0'), Objective.create('UUID1'), Objective.create('UUID2'), Objective.create('UUID3')]

//score to save hardcoded values to
const warp = Objective.create('warp')

//create player scoreboards
const x = Objective.create('x')
const y = Objective.create('y')
const z = Objective.create('z')
const pos1_x = Objective.create('pos1_x')
const pos1_y = Objective.create('pos1_y')
const pos1_z = Objective.create('pos1_z')
const pos2_x = Objective.create('pos2_x')
const pos2_y = Objective.create('pos2_y')
const pos2_z = Objective.create('pos2_z')
const pos3_x = Objective.create('pos3_x')
const pos3_y = Objective.create('pos3_y')
const pos3_z = Objective.create('pos3_z')

const pos3_rx = Objective.create('pos3_rx')
const pos3_ry = Objective.create('pos3_ry')

const area_confirm = Objective.create('area_confirm')
const warp_confirm = Objective.create('warp_confirm')

//create triggers
const pos1 = Objective.create('pos1', 'trigger')
const pos2 = Objective.create('pos2', 'trigger')
const pos3 = Objective.create('pos3', 'trigger')
const reset = Objective.create('reset', 'trigger')
const remove = Objective.create('remove', 'trigger')

//internal score
const temp = Objective.create('temp')

export { temp, remove, warp, min_x, max_x, min_y, max_y, min_z, max_z, UUID, x, y, z, pos1, pos1_x, pos1_y, pos1_z, pos2, pos2_x, pos2_y, pos2_z, pos3, pos3_rx, pos3_x, pos3_ry, pos3_y, pos3_z, area_confirm, warp_confirm, reset }