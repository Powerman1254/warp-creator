import { MCFunction, Selector, tellraw, forceload, abs } from "sandstone";
import {warp} from "./scores";

//all the load functions

//displays message after load completes
MCFunction('confirm', () => {
    tellraw(Selector("@a"), ["",{"text":"Load succesfull","bold":true,"color":"gold"},{"text":"\nFor help type "},{"text":"/function warp_creator:help","clickEvent":{"action":"run_command","value":"/function warp_creator:help"}}])
}, { runOnLoad: true })

//set some hard values to use
MCFunction('init', () => {
    warp('#-64').set(-64)
    warp('#319').set(319)
}, { runOnLoad: true })

//make sure the area in which the data is stored is loaded
MCFunction('warp_manager:init', () => {
    forceload.add(abs(0, 0), abs(0, 0))
}, { runOnLoad: true })