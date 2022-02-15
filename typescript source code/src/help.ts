import { MCFunction, Selector, tellraw } from "sandstone";

//help function which shows a quick summary on how to use the datapack
MCFunction("help", () => {
	tellraw(Selector("@s"), ["", { text: "Warp creator", obfuscated: true, color: "gold" }, { text: "-Warp creator-" }, { text: "Warp creator", obfuscated: true, color: "gold" }, { text: "\n\nShort explenation:\nUse Pos 1 and 2 to create an area add pos 3 to make it an warp pos 3 will be warp destination\n\nHow to use:\n\u2022 add the " }, { text: "Builder", clickEvent: { action: "run_command", value: "/tag add @s Builder" } }, { text: " tag to yourself to enter edit mode\n\u2022 to select your area use /trigger for pos 1, 2 and if creating a warp 3\n\u2022 when Pos 1 and 2 are initialized a message will apear in chat asking you to create a area, when also having pos 3 entered the message will ask to create a warp\n\u2022 when confirming the area creation a armor stand will appear, name this stand to name your area (text formatting is suported)" }]);
});
