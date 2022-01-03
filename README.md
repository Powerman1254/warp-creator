# warp-creator
a datapack to create and manage warps and areas in game using commands

## How to use:
Install the datapack in your world.\
to use the datapack type `/tag @s add Builder`.\
to make an area define 2 corners by using `/trigger pos1` and `/trigger pos2` respectively.\
once two corners are defined a message will appear in chat asking if you would like to create an area.\
clicking *confirm* will make an armor stand appear, naming this armor stand will name the area text formatting is supported.

To create a warp use `/trigger pos1`, `/trigger pos2` and `/trigger pos3`\
pos1 and 2 will define the entrance and pos3 the destination.\
The rotation of pos3 is saved so keep that in mind.\
after defining all the positions a message will appear in chat asking if you would like to create the warp.\
clicking *confirm* will instantly create the warp.

after creating all your areas and warps you can safely delete the Warp_creator namespace folder located in: `<Your minecraft folder>/saves/<world name>/datapacks/warp_manager/data/warp_creator`

If you made a mistake while setting the positions type `/trigger reset` to reset the positions