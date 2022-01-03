import { abs, data, execute, MCFunction, NBT, relative, scoreboard, Selector, summon, tag, tellraw, title, tp, _ } from 'sandstone';
import { pos1_x, warp, pos2_x, pos3_x, area_confirm, warp_confirm, max_x, min_x, pos1_z, pos2_z, max_z, min_z, pos1_y, pos2_y, max_y, min_y, pos3_y, pos3_z, pos3_rx, pos3_ry, y, pos1, pos2, pos3, reset, remove } from './scores';
import particle_drawer from './drawer';

//check if triggers are triggered and execute right function
MCFunction('area/create/triggers', () => {
    scoreboard.players.enable(Selector('@a', { tag: 'Builder' }), pos1.name)
    execute.as(Selector('@a', { scores: { pos1: 1 } })).at(Selector('@s')).run(() => { pos1f() })
    scoreboard.players.reset(Selector('@a', { scores: { pos1: 1 } }), pos1.name)

    scoreboard.players.enable(Selector('@a', { tag: 'Builder' }), pos2.name)
    execute.as(Selector('@a', { scores: { pos2: 1 } })).at(Selector('@s')).run(() => { pos2f() })
    scoreboard.players.reset(Selector('@a', { scores: { pos2: 1 } }), pos2.name)

    scoreboard.players.enable(Selector('@a', { tag: 'Builder' }), pos3.name)
    execute.as(Selector('@a', { scores: { pos3: 1 } })).at(Selector('@s')).run(() => { pos3f() })
    scoreboard.players.reset(Selector('@a', { scores: { pos3: 1 } }), pos3.name)

    scoreboard.players.enable(Selector('@a', { tag: 'Builder' }), reset.name)
    execute.as(Selector('@a', { scores: { reset: 1 } })).at(Selector('@s')).run(() => { resetf() })
    scoreboard.players.reset(Selector('@a', { scores: { reset: 1 } }), reset.name)

    scoreboard.players.enable(Selector('@a', { tag: 'Builder' }), remove.name)
    //suggest command to remove specific armor stand
    execute.as(Selector('@a', { scores: { remove: 1 } })).at(Selector('@s')).run.tellraw(Selector('@s'), ["",{"text":"Remove","bold":true,"color":"dark_red","clickEvent":{"action":"suggest_command","value":"/kill @e[type=armor_stand,tag=area,name=<name here>]"}},{"text":" area\n"},{"text":"Remove","bold":true,"color":"dark_red","clickEvent":{"action":"suggest_command","value":"/kill @e[type=minecraft:armor_stand,tag=warp,scores={pos1_x=<x of lowest corner point>,pos1_y=<y of lowest corner point>,pos1_z=<z of lowest corner point>}]"}},{"text":" warp"}])
    scoreboard.players.reset(Selector('@a', { scores: { reset: 1 } }), remove.name)

}, { runEachTick: true })

//store pos1
const pos1f = MCFunction('area/create/pos1', () => {
    execute.store.result.score(Selector('@s'), pos1_x.name).run.data.get.entity(Selector('@s'), 'Pos[0]')
    execute.store.result.score(Selector('@s'), pos1_y.name).run.data.get.entity(Selector('@s'), 'Pos[1]')
    execute.store.result.score(Selector('@s'), pos1_z.name).run.data.get.entity(Selector('@s'), 'Pos[2]')
})

//store pos2
const pos2f = MCFunction('area/create/pos2', () => {
    execute.store.result.score(Selector('@s'), pos2_x.name).run.data.get.entity(Selector('@s'), 'Pos[0]')
    execute.store.result.score(Selector('@s'), pos2_y.name).run.data.get.entity(Selector('@s'), 'Pos[1]')
    execute.store.result.score(Selector('@s'), pos2_z.name).run.data.get.entity(Selector('@s'), 'Pos[2]')
})

//store pos3
const pos3f = MCFunction('area/create/pos3', () => {
    execute.store.result.score(Selector('@s'), pos3_x.name).run.data.get.entity(Selector('@s'), 'Pos[0]', 100)
    execute.store.result.score(Selector('@s'), pos3_y.name).run.data.get.entity(Selector('@s'), 'Pos[1]', 100)
    execute.store.result.score(Selector('@s'), pos3_z.name).run.data.get.entity(Selector('@s'), 'Pos[2]', 100)

    execute.store.result.score(Selector('@s'), pos3_rx.name).run.data.get.entity(Selector('@s'), 'Rotation[0]', 100)
    execute.store.result.score(Selector('@s'), pos3_ry.name).run.data.get.entity(Selector('@s'), 'Rotation[1]', 100)
})

//display stored pos if pos is stored
MCFunction('area/create/checkpos', () => {
    execute.as(Selector('@a')).run(() => {
        //test if warp or area is created
        _.if(_.and(_.or(pos1_x(Selector('@s')).lessOrEqualThan(0), pos1_x(Selector('@s')).greaterOrEqualThan(0)), _.and(_.or(pos2_x(Selector('@s')).greaterOrEqualThan(0), pos2_x(Selector('@s')).lessOrEqualThan(0)), _.not(_.or(pos3_x(Selector('@s')).lessOrEqualThan(0), pos3_x(Selector('@s')).greaterOrEqualThan(0))))), () => {
            title(Selector('@s')).actionbar(['', 'pos1( x: ', { 'score': { 'name': '@s', 'objective': pos1_x.name } }, ' z: ', { 'score': { 'name': '@s', 'objective': pos1_z.name } }, ' ), pos2( x: ', { 'score': { 'name': '@s', 'objective': pos2_x.name } }, ' z: ', { 'score': { 'name': '@s', 'objective': pos2_z.name } }, ' )'])
        })
            .elseIf(_.or(_.or(pos1_x(Selector('@s')).lessOrEqualThan(0), pos1_x(Selector('@s')).greaterOrEqualThan(0)), _.or(_.or(pos2_x(Selector('@s')).greaterOrEqualThan(0), pos2_x(Selector('@s')).lessOrEqualThan(0)), _.or(pos3_x(Selector('@s')).lessOrEqualThan(0), pos3_x(Selector('@s')).greaterOrEqualThan(0)))), () => {
                title(Selector('@s')).actionbar(['', 'pos1( x: ', { 'score': { 'name': '@s', 'objective': pos1_x.name } }, ' z: ', { 'score': { 'name': '@s', 'objective': pos1_z.name } }, ' ), pos2( x: ', { 'score': { 'name': '@s', 'objective': pos2_x.name } }, ' z: ', { 'score': { 'name': '@s', 'objective': pos2_z.name } }, ' ), pos3( x: ', { 'score': { 'name': '@s', 'objective': pos3_x.name } }, ' z: ', { 'score': { 'name': '@s', 'objective': pos3_z.name } }, ')'])
            })
    })
}, { runEachTick: true })

//display text in chat for confirmation and visualize selection
MCFunction('area/create/confirmpos', () => {
    execute.as(Selector('@a')).run(() => {
        _.if(_.and(_.or(pos1_x(Selector('@s')).lessOrEqualThan(0), pos1_x(Selector('@s')).greaterOrEqualThan(0)), _.or(pos2_x(Selector('@s')).greaterOrEqualThan(0), pos2_x(Selector('@s')).lessOrEqualThan(0))), () => {
            _.if(_.or(pos3_x(Selector('@s')).lessOrEqualThan(0), pos3_x(Selector('@s')).greaterOrEqualThan(0)), () => {
                particle_drawer([pos1_x(Selector('@s')), pos1_y(Selector('@s')), pos1_z(Selector('@s'))], [pos2_x(Selector('@s')), pos2_y(Selector('@s')), pos2_z(Selector('@s'))])
                particle_drawer([pos3_x(Selector('@s')), pos3_y(Selector('@s')), pos3_z(Selector('@s'))], [pos3_x(Selector('@s')), pos3_y(Selector('@s')), pos3_z(Selector('@s'))], 0.01)
            })
                .else(() => {
                    particle_drawer([pos1_x(Selector('@s')), warp('#-64'), pos1_z(Selector('@s'))], [pos2_x(Selector('@s')), warp('#319'), pos2_z(Selector('@s'))])
                    particle_drawer([pos1_x(Selector('@s')), y(Selector('@s')), pos1_z(Selector('@s'))], [pos2_x(Selector('@s')), y(Selector('@s')), pos2_z(Selector('@s'))])
                })
        })

        //test if warp or area is created
        _.if(_.and(_.and(_.or(pos1_x(Selector('@s')).lessOrEqualThan(0), pos1_x(Selector('@s')).greaterOrEqualThan(0)), _.and(_.or(pos2_x(Selector('@s')).greaterOrEqualThan(0), pos2_x(Selector('@s')).lessOrEqualThan(0)), _.not(_.or(pos3_x(Selector('@s')).lessOrEqualThan(0), pos3_x(Selector('@s')).greaterOrEqualThan(0))))), _.not(area_confirm(Selector('@s')).matches(1))), () => {
            tellraw(Selector('@s'), ['', { 'text': 'Valid posses detected', 'bold': true, 'color': 'gold' }, { 'text': '\n' }, { 'text': 'create new area? ', 'color': 'yellow' }, { 'text': 'Confirm', 'color': 'dark_green', 'clickEvent': { 'action': 'run_command', 'value': '/function warp_creator:area/create/confirm' } }])
            area_confirm(Selector('@s')).set(1)
        })
            .elseIf(_.and(_.or(pos1_x(Selector('@s')).lessOrEqualThan(0), pos1_x(Selector('@s')).greaterOrEqualThan(0)), _.and(_.or(pos2_x(Selector('@s')).greaterOrEqualThan(0), pos2_x(Selector('@s')).lessOrEqualThan(0)), _.or(pos3_x(Selector('@s')).lessOrEqualThan(0), pos3_x(Selector('@s')).greaterOrEqualThan(0))), _.not(warp_confirm(Selector('@s')).matches(1))), () => {
                tellraw(Selector('@s'), ['', { 'text': 'Valid posses detected', 'bold': true, 'color': 'gold' }, { 'text': '\n' }, { 'text': 'create new warp? ', 'color': 'yellow' }, { 'text': 'confirm', 'color': 'dark_green', 'clickEvent': { 'action': 'run_command', 'value': '/function warp_creator:warp/create/confirm' } }])
                warp_confirm(Selector('@s')).set(1)
            })
    })
}, { runEachTick: true })

//create new warp
MCFunction('warp/create/confirm', () => {
    summon('minecraft:armor_stand', relative(0, 0, 0), { CustomNameVisible: NBT.byte(1), NoGravity: NBT.byte(1), Invulnerable: NBT.byte(1) })
    tag(Selector('@e', { type: 'minecraft:armor_stand', sort: 'nearest', limit: 1 })).add('Warp')

    //sort smaller coordinate from bigger one
    //x
    _.if(pos1_x(Selector('@s')).greaterOrEqualThan(pos2_x(Selector('@s'))), () => {
        max_x(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos1_x(Selector('@s')))
        min_x(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos2_x(Selector('@s')))
    })
        .else(() => {
            min_x(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos1_x(Selector('@s')))
            max_x(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos2_x(Selector('@s')))
        })

    //y
    _.if(pos1_z(Selector('@s')).greaterOrEqualThan(pos2_z(Selector('@s'))), () => {
        max_z(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos1_z(Selector('@s')))
        min_z(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos2_z(Selector('@s')))
    })
        .else(() => {
            min_z(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos1_z(Selector('@s')))
            max_z(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos2_z(Selector('@s')))
        })

    //z
    _.if(pos1_y(Selector('@s')).greaterOrEqualThan(pos2_y(Selector('@s'))), () => {
        max_y(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos1_y(Selector('@s')))
        min_y(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos2_y(Selector('@s')))
    })
        .else(() => {
            min_y(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos1_y(Selector('@s')))
            max_y(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos2_y(Selector('@s')))
        })

    pos3_x(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos3_x(Selector('@s')))
    pos3_y(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos3_y(Selector('@s')))
    pos3_z(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos3_z(Selector('@s')))
    pos3_rx(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos3_rx(Selector('@s')))
    pos3_ry(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Warp', limit: 1, sort: 'nearest' })).set(pos3_ry(Selector('@s')))

    //tp armor stand to save location
    execute.as(Selector('@e', { type: 'minecraft:armor_stand', sort: 'nearest', limit: 1 })).at(Selector('@s')).run.tp(abs(0, -64, 0))
    execute.as(Selector('@e', { type: 'minecraft:armor_stand', sort: 'nearest', limit: 1 })).at(Selector('@s')).run.tag(Selector('@s')).add('confirmed')

    //reset player data
    scoreboard.players.reset(Selector('@s'), pos1_x.name)
    scoreboard.players.reset(Selector('@s'), pos2_x.name)
    scoreboard.players.reset(Selector('@s'), pos3_x.name)
    scoreboard.players.reset(Selector('@s'), pos1_y.name)
    scoreboard.players.reset(Selector('@s'), pos2_y.name)
    scoreboard.players.reset(Selector('@s'), pos3_y.name)
    scoreboard.players.reset(Selector('@s'), pos1_z.name)
    scoreboard.players.reset(Selector('@s'), pos2_z.name)
    scoreboard.players.reset(Selector('@s'), pos3_z.name)
    scoreboard.players.reset(Selector('@s'), pos3_rx.name)
    scoreboard.players.reset(Selector('@s'), pos3_ry.name)
    scoreboard.players.reset(Selector('@s'), warp_confirm.name)
    scoreboard.players.reset(Selector('@s'), area_confirm.name)
})

//summon armor stand and give it relevant data
MCFunction('area/create/confirm', () => {
    summon('minecraft:armor_stand', relative(0, 0, 0), { CustomNameVisible: NBT.byte(1), NoGravity: NBT.byte(1), Invulnerable: NBT.byte(1) })
    tag(Selector('@e', { type: 'minecraft:armor_stand', sort: 'nearest', limit: 1 })).add('Area')

    _.if(pos1_x(Selector('@s')).greaterOrEqualThan(pos2_x(Selector('@s'))), () => {
        max_x(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area', limit: 1, sort: 'nearest' })).set(pos1_x(Selector('@s')))
        min_x(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area', limit: 1, sort: 'nearest' })).set(pos2_x(Selector('@s')))
    })
        .else(() => {
            min_x(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area', limit: 1, sort: 'nearest' })).set(pos1_x(Selector('@s')))
            max_x(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area', limit: 1, sort: 'nearest' })).set(pos2_x(Selector('@s')))
        })

    _.if(pos1_z(Selector('@s')).greaterOrEqualThan(pos2_z(Selector('@s'))), () => {
        max_z(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area', limit: 1, sort: 'nearest' })).set(pos1_z(Selector('@s')))
        min_z(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area', limit: 1, sort: 'nearest' })).set(pos2_z(Selector('@s')))
    })
        .else(() => {
            min_z(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area', limit: 1, sort: 'nearest' })).set(pos1_z(Selector('@s')))
            max_z(Selector('@e', { type: 'minecraft:armor_stand', tag: 'Area', limit: 1, sort: 'nearest' })).set(pos2_z(Selector('@s')))
        })



    //reset player data
    scoreboard.players.reset(Selector('@s'), pos1_x.name)
    scoreboard.players.reset(Selector('@s'), pos2_x.name)
    scoreboard.players.reset(Selector('@s'), pos1_y.name)
    scoreboard.players.reset(Selector('@s'), pos2_y.name)
    scoreboard.players.reset(Selector('@s'), pos1_z.name)
    scoreboard.players.reset(Selector('@s'), pos2_z.name)
    scoreboard.players.reset(Selector('@s'), warp_confirm.name)
    scoreboard.players.reset(Selector('@s'), area_confirm.name)
})

//reset player data
const resetf = MCFunction('reset', () => {
    scoreboard.players.reset(Selector('@s'), pos1_x.name)
    scoreboard.players.reset(Selector('@s'), pos2_x.name)
    scoreboard.players.reset(Selector('@s'), pos3_x.name)
    scoreboard.players.reset(Selector('@s'), pos1_y.name)
    scoreboard.players.reset(Selector('@s'), pos2_y.name)
    scoreboard.players.reset(Selector('@s'), pos3_y.name)
    scoreboard.players.reset(Selector('@s'), pos1_z.name)
    scoreboard.players.reset(Selector('@s'), pos2_z.name)
    scoreboard.players.reset(Selector('@s'), pos3_z.name)
    scoreboard.players.reset(Selector('@s'), pos3_rx.name)
    scoreboard.players.reset(Selector('@s'), pos3_ry.name)
    scoreboard.players.reset(Selector('@s'), warp_confirm.name)
    scoreboard.players.reset(Selector('@s'), area_confirm.name)
})


//save stand if custom name is detected
MCFunction('area/create/checkstand', () => {
    execute.as(Selector('@e', { type: 'minecraft:armor_stand', tag: ['Area', '!confirmed'] })).run(() => {
        _.if(_.data.entity(Selector('@s'), 'CustomName'), () => {
            data.modify.entity(Selector('@e', { type: 'minecraft:armor_stand', tag: ['Area', '!confirmed'], limit: 1 }), 'CustomNameVisible').set.value(NBT.byte(0))
            tp(abs(0, -64, 0))
            tag(Selector('@s')).add('confirmed')
        })
    })
}, { runEachTick: true })