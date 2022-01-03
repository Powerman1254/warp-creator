import { execute, Objective, Selector, summon, _, rel, MultiplePlayersArgument, kill, Score } from "sandstone";

//create internal scores

const drawer = Objective.create('drawer')

const lengthx = drawer('lengthx')
const lengthy = drawer('lengthy')
const lengthz = drawer('lengthz')

const Pos1_internal = [drawer('Pos1x'), drawer('Pos1y'), drawer('Pos1z')]
const Pos2_internal = [drawer('Pos2x'), drawer('Pos2y'), drawer('Pos2z')]

/**
 *  Draws a box with the given particle from targets pos1 to pos2
 *  @param {Array<ObjectiveInstance<string>>} Pos1 x, y and z score of pos 1
 *  @param {Array<ObjectiveInstance<string>>} Pos2 x, y and z score of pos 2
 *  @param {"minecraft:lava" | "minecraft:mycelium" | "minecraft:barrier" | "minecraft:light" | "minecraft:end_rod" | "minecraft:composter" | "minecraft:flame" | "minecraft:dolphin" | "minecraft:elder_guardian" | "minecraft:witch" | "minecraft:dragon_breath" | "minecraft:totem_of_undying" | "minecraft:ambient_entity_effect" | "minecraft:angry_villager" | "minecraft:bubble" | "minecraft:cloud" | "minecraft:crit" | "minecraft:damage_indicator" | "minecraft:dripping_lava" | "minecraft:falling_lava" | "minecraft:landing_lava" | "minecraft:dripping_water" | "minecraft:falling_water" | "minecraft:dust_color_transition" | "minecraft:effect" | "minecraft:enchanted_hit" | "minecraft:enchant" | "minecraft:entity_effect" | "minecraft:explosion_emitter" | "minecraft:explosion" | "minecraft:firework" | "minecraft:fishing" | "minecraft:soul_fire_flame" | "minecraft:soul" | "minecraft:flash" | "minecraft:happy_villager" | "minecraft:heart" | "minecraft:instant_effect" | "minecraft:vibration" | "minecraft:item_slime" | "minecraft:item_snowball" | "minecraft:large_smoke" | "minecraft:note" | "minecraft:poof" | "minecraft:portal" | "minecraft:rain" | "minecraft:smoke" | "minecraft:sneeze" | "minecraft:spit" | "minecraft:squid_ink" | "minecraft:sweep_attack" | "minecraft:underwater" | "minecraft:splash" | "minecraft:bubble_pop" | "minecraft:current_down" | "minecraft:bubble_column_up" | "minecraft:nautilus" | "minecraft:campfire_cosy_smoke" | "minecraft:campfire_signal_smoke" | "minecraft:dripping_honey" | "minecraft:falling_honey" | "minecraft:landing_honey" | "minecraft:falling_nectar" | "minecraft:falling_spore_blossom" | "minecraft:ash" | "minecraft:crimson_spore" | "minecraft:warped_spore" | "minecraft:spore_blossom_air" | "minecraft:dripping_obsidian_tear" | "minecraft:falling_obsidian_tear" | "minecraft:landing_obsidian_tear" | "minecraft:reverse_portal" | "minecraft:white_ash" | "minecraft:small_flame" | "minecraft:snowflake" | "minecraft:dripping_dripstone_lava" | "minecraft:falling_dripstone_lava" | "minecraft:dripping_dripstone_water" | "minecraft:falling_dripstone_water" | "minecraft:glow_squid_ink" | "minecraft:glow" | "minecraft:wax_on" | "minecraft:wax_off" | "minecraft:electric_spark" | "minecraft:scrape"} particleName the particle to use. defaults to happy villager
 *  @param {MultiplePlayersArgument} visibleTo optional, determains who can see the selection. defaults to \@a
*/

export default function particle_drawer(Pos1: Array<Score<string>>, Pos2: Array<Score<string>>, scale: number = 1.0, particleName: "minecraft:lava" | "minecraft:mycelium" | "minecraft:barrier" | "minecraft:light" | "minecraft:end_rod" | "minecraft:composter" | "minecraft:flame" | "minecraft:dolphin" | "minecraft:elder_guardian" | "minecraft:witch" | "minecraft:dragon_breath" | "minecraft:totem_of_undying" | "minecraft:ambient_entity_effect" | "minecraft:angry_villager" | "minecraft:bubble" | "minecraft:cloud" | "minecraft:crit" | "minecraft:damage_indicator" | "minecraft:dripping_lava" | "minecraft:falling_lava" | "minecraft:landing_lava" | "minecraft:dripping_water" | "minecraft:falling_water" | "minecraft:dust_color_transition" | "minecraft:effect" | "minecraft:enchanted_hit" | "minecraft:enchant" | "minecraft:entity_effect" | "minecraft:explosion_emitter" | "minecraft:explosion" | "minecraft:firework" | "minecraft:fishing" | "minecraft:soul_fire_flame" | "minecraft:soul" | "minecraft:flash" | "minecraft:happy_villager" | "minecraft:heart" | "minecraft:instant_effect" | "minecraft:vibration" | "minecraft:item_slime" | "minecraft:item_snowball" | "minecraft:large_smoke" | "minecraft:note" | "minecraft:poof" | "minecraft:portal" | "minecraft:rain" | "minecraft:smoke" | "minecraft:sneeze" | "minecraft:spit" | "minecraft:squid_ink" | "minecraft:sweep_attack" | "minecraft:underwater" | "minecraft:splash" | "minecraft:bubble_pop" | "minecraft:current_down" | "minecraft:bubble_column_up" | "minecraft:nautilus" | "minecraft:campfire_cosy_smoke" | "minecraft:campfire_signal_smoke" | "minecraft:dripping_honey" | "minecraft:falling_honey" | "minecraft:landing_honey" | "minecraft:falling_nectar" | "minecraft:falling_spore_blossom" | "minecraft:ash" | "minecraft:crimson_spore" | "minecraft:warped_spore" | "minecraft:spore_blossom_air" | "minecraft:dripping_obsidian_tear" | "minecraft:falling_obsidian_tear" | "minecraft:landing_obsidian_tear" | "minecraft:reverse_portal" | "minecraft:white_ash" | "minecraft:small_flame" | "minecraft:snowflake" | "minecraft:dripping_dripstone_lava" | "minecraft:falling_dripstone_lava" | "minecraft:dripping_dripstone_water" | "minecraft:falling_dripstone_water" | "minecraft:glow_squid_ink" | "minecraft:glow" | "minecraft:wax_on" | "minecraft:wax_off" | "minecraft:electric_spark" | "minecraft:scrape" = "minecraft:happy_villager", visibleTo: MultiplePlayersArgument = Selector('@a')): void {

    //sort scores so pos1 is the smallest
    for (var i = 0; i < 3; i++) {
        _.if(Pos1[i].equalTo(Pos2[i]), () => {
            Pos1_internal[i].set(Pos2[i])
            Pos2_internal[i].set(Pos1[i])
        }).else(() => {
            _.if(Pos1[i].greaterOrEqualThan(Pos2[i]), () => {
                Pos1_internal[i].set(Pos2[i])
                Pos2_internal[i].set(Pos1[i]).add(1)
            }).else(() => {
                Pos1_internal[i].set(Pos1[i])
                Pos2_internal[i].set(Pos2[i]).add(1)
            })
        })
    }

    Pos1 = Pos1_internal
    Pos2 = Pos2_internal

    //get line length
    lengthx.set(Pos2[0]).remove(Pos1[0]).add(1)
    lengthy.set(Pos2[1]).remove(Pos1[1]).add(1)
    lengthz.set(Pos2[2]).remove(Pos1[2]).add(1)

    summon('minecraft:marker', rel(0, 0, 0), { Tags: ["draw"] })


    //main function
    execute.as(Selector('@e', { type: "minecraft:marker", tag: "draw", limit: 1 })).at(Selector('@s')).run(() => {
        //draw cube by brute force
        resetpos(Pos1, scale)
        draw_line(lengthx, 'x', particleName, visibleTo)
        resetpos(Pos1, scale)
        draw_line(lengthy, 'y', particleName, visibleTo)
        resetpos(Pos1, scale)
        draw_line(lengthz, 'z', particleName, visibleTo)

        resetpos([Pos1[0], Pos2[1], Pos1[2]], scale)
        draw_line(lengthx, 'x', particleName, visibleTo)
        resetpos([Pos1[0], Pos2[1], Pos1[2]], scale)
        draw_line(lengthz, 'z', particleName, visibleTo)

        resetpos([Pos1[0], Pos1[1], Pos2[2]], scale)
        draw_line(lengthy, 'y', particleName, visibleTo)
        resetpos([Pos1[0], Pos1[1], Pos2[2]], scale)
        draw_line(lengthx, 'x', particleName, visibleTo)

        resetpos([Pos2[0], Pos1[1], Pos1[2]], scale)
        draw_line(lengthz, 'z', particleName, visibleTo)
        resetpos([Pos2[0], Pos1[1], Pos1[2]], scale)
        draw_line(lengthy, 'y', particleName, visibleTo)

        resetpos([Pos1[0], Pos2[1], Pos2[2]], scale)
        draw_line(lengthx, 'x', particleName, visibleTo)
        resetpos([Pos2[0], Pos2[1], Pos1[2]], scale)
        draw_line(lengthz, 'z', particleName, visibleTo)

        resetpos([Pos2[0], Pos1[1], Pos2[2]], scale)
        draw_line(lengthy, 'y', particleName, visibleTo)

        kill(Selector('@s'))
    })


}

/**
 * resets the marker to the given score as position
 * @param Destiny the xyz the marker needs to reset to based on scoreboard
 * @param scale the scale of the scores for more presicion
 */
function resetpos(Destiny: Score<string>[], scale: number = 1) {
    execute.store.result.entity(Selector('@s'), 'Pos[0]', 'double', scale).run.scoreboard.players.get(Destiny[0].target, Destiny[0].objective)
    execute.store.result.entity(Selector('@s'), 'Pos[1]', 'double', scale).run.scoreboard.players.get(Destiny[1].target, Destiny[1].objective)
    execute.store.result.entity(Selector('@s'), 'Pos[2]', 'double', scale).run.scoreboard.players.get(Destiny[2].target, Destiny[2].objective)
}

/**
 * draws a line
 * @param length the length the line needs to be
 * @param xyz which direction the line needs to face
 * @param particleName the type of particle to show
 * @param visibleTo who can see the line
 */
function draw_line(length: Score<string>, xyz: string, particleName: "minecraft:lava" | "minecraft:mycelium" | "minecraft:barrier" | "minecraft:light" | "minecraft:end_rod" | "minecraft:composter" | "minecraft:flame" | "minecraft:dolphin" | "minecraft:elder_guardian" | "minecraft:witch" | "minecraft:dragon_breath" | "minecraft:totem_of_undying" | "minecraft:ambient_entity_effect" | "minecraft:angry_villager" | "minecraft:bubble" | "minecraft:cloud" | "minecraft:crit" | "minecraft:damage_indicator" | "minecraft:dripping_lava" | "minecraft:falling_lava" | "minecraft:landing_lava" | "minecraft:dripping_water" | "minecraft:falling_water" | "minecraft:dust_color_transition" | "minecraft:effect" | "minecraft:enchanted_hit" | "minecraft:enchant" | "minecraft:entity_effect" | "minecraft:explosion_emitter" | "minecraft:explosion" | "minecraft:firework" | "minecraft:fishing" | "minecraft:soul_fire_flame" | "minecraft:soul" | "minecraft:flash" | "minecraft:happy_villager" | "minecraft:heart" | "minecraft:instant_effect" | "minecraft:vibration" | "minecraft:item_slime" | "minecraft:item_snowball" | "minecraft:large_smoke" | "minecraft:note" | "minecraft:poof" | "minecraft:portal" | "minecraft:rain" | "minecraft:smoke" | "minecraft:sneeze" | "minecraft:spit" | "minecraft:squid_ink" | "minecraft:sweep_attack" | "minecraft:underwater" | "minecraft:splash" | "minecraft:bubble_pop" | "minecraft:current_down" | "minecraft:bubble_column_up" | "minecraft:nautilus" | "minecraft:campfire_cosy_smoke" | "minecraft:campfire_signal_smoke" | "minecraft:dripping_honey" | "minecraft:falling_honey" | "minecraft:landing_honey" | "minecraft:falling_nectar" | "minecraft:falling_spore_blossom" | "minecraft:ash" | "minecraft:crimson_spore" | "minecraft:warped_spore" | "minecraft:spore_blossom_air" | "minecraft:dripping_obsidian_tear" | "minecraft:falling_obsidian_tear" | "minecraft:landing_obsidian_tear" | "minecraft:reverse_portal" | "minecraft:white_ash" | "minecraft:small_flame" | "minecraft:snowflake" | "minecraft:dripping_dripstone_lava" | "minecraft:falling_dripstone_lava" | "minecraft:dripping_dripstone_water" | "minecraft:falling_dripstone_water" | "minecraft:glow_squid_ink" | "minecraft:glow" | "minecraft:wax_on" | "minecraft:wax_off" | "minecraft:electric_spark" | "minecraft:scrape", visibleTo: MultiplePlayersArgument) {
    _.forRange(0, length, () => {
        execute.at(Selector('@s')).run.particle(particleName, rel(0, 0, 0), [0, 0, 0], 0, 1, "force", visibleTo)

        if (xyz == 'x') {
            execute.at(Selector('@s')).run.tp(rel(1, 0, 0))
        }
        else if (xyz == 'y') {
            execute.at(Selector('@s')).run.tp(rel(0, 1, 0))
        }
        else if (xyz == 'z') {
            execute.at(Selector('@s')).run.tp(rel(0, 0, 1))
        }
    })
}

