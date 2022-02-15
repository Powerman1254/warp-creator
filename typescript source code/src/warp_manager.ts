import { data, execute, kill, loc, MCFunction, rel, Selector, summon, tag, _ } from "sandstone"
import { max_x, max_y, max_z, min_x, min_y, min_z, pos3_rx, pos3_ry, pos3_x, pos3_y, pos3_z, temp, UUID, x, y, z } from "./scores"

MCFunction('warp_manager:tick', () => {
    //get players x and z coordinate and store it in scoreboard
    execute.as(Selector('@a')).store.result.score(Selector('@s'), x.name).run.data.get.entity(Selector('@s'), 'Pos[0]')
    execute.as(Selector('@a')).store.result.score(Selector('@s'), y.name).run.data.get.entity(Selector('@s'), 'Pos[1]')
    execute.as(Selector('@a')).store.result.score(Selector('@s'), z.name).run.data.get.entity(Selector('@s'), 'Pos[2]')

    //get stand UUID and store it in scoreboard
    execute.as(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area' })).store.result.score(Selector('@s'), UUID[0].name).run.data.get.entity(Selector('@s'), 'UUID[0]')
    execute.as(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area' })).store.result.score(Selector('@s'), UUID[1].name).run.data.get.entity(Selector('@s'), 'UUID[1]')
    execute.as(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area' })).store.result.score(Selector('@s'), UUID[2].name).run.data.get.entity(Selector('@s'), 'UUID[2]')
    execute.as(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area' })).store.result.score(Selector('@s'), UUID[3].name).run.data.get.entity(Selector('@s'), 'UUID[3]')

    area_enter()
    warp_test()
}, { runEachTick: true })

//test if player is in warp location
const warp_test = MCFunction('warp_manager:warp_test', () => {
    execute.as(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp' })).at(Selector('@a')).run(() => {
        _.if(_.and(_.and(x(Selector('@p')).greaterOrEqualThan(min_x(Selector('@s'))), _.and(x(Selector('@p')).lessOrEqualThan(max_x(Selector('@s'))), _.and(z(Selector('@p')).lessOrEqualThan(max_z(Selector('@s'))), z(Selector('@p')).greaterOrEqualThan(min_z(Selector('@s')))))), _.and(y(Selector('@p')).greaterOrEqualThan(min_y(Selector('@s'))), y(Selector('@p')).lessOrEqualThan(max_y(Selector('@s'))))), () => {
            summon('minecraft:marker', rel(0, 0, 0))
            tag(Selector('@e', { type: 'minecraft:marker', sort: 'nearest', limit: 1 })).add('warp')
            execute.store.result.entity(Selector('@e', { type: 'minecraft:marker', sort: 'nearest', limit: 1, tag: 'warp' }), 'Pos[0]', 'double', 0.01).run.scoreboard.players.get(Selector('@s'), pos3_x.name)
            execute.store.result.entity(Selector('@e', { type: 'minecraft:marker', sort: 'nearest', limit: 1, tag: 'warp' }), 'Pos[1]', 'double', 0.01).run.scoreboard.players.get(Selector('@s'), pos3_y.name)
            execute.store.result.entity(Selector('@e', { type: 'minecraft:marker', sort: 'nearest', limit: 1, tag: 'warp' }), 'Pos[2]', 'double', 0.01).run.scoreboard.players.get(Selector('@s'), pos3_z.name)
            execute.store.result.entity(Selector('@e', { type: 'minecraft:marker', sort: 'nearest', limit: 1, tag: 'warp' }), 'Rotation[0]', 'float', 0.01).run.scoreboard.players.get(Selector('@s'), pos3_rx.name)
            execute.store.result.entity(Selector('@e', { type: 'minecraft:marker', sort: 'nearest', limit: 1, tag: 'warp' }), 'Rotation[1]', 'float', 0.01).run.scoreboard.players.get(Selector('@s'), pos3_ry.name)
            execute.as(Selector('@p')).at(Selector('@e', { type: 'minecraft:marker', limit: 1, tag: 'warp' })).facing(loc(0, 0, 1)).run.tp(Selector('@p'), Selector('@e', { type: 'minecraft:marker', limit: 1, tag: 'warp' }))
            kill(Selector('@e', { type: 'minecraft:marker', limit: 1, tag: 'warp' }))
        })
    })
})

const area_enter = MCFunction('warp_manager:area_enter', () => {
    //test if player is in area and display area name
    execute.as(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area' })).at(Selector('@a')).run(() => {
        //test if player is in area
        _.if(_.and(x(Selector('@p')).greaterOrEqualThan(min_x(Selector('@s'))), _.and(x(Selector('@p')).lessOrEqualThan(max_x(Selector('@s'))), _.and(z(Selector('@p')).lessOrEqualThan(max_z(Selector('@s'))), z(Selector('@p')).greaterOrEqualThan(min_z(Selector('@s')))))), () => {
        })
    })
})