let BaseGenerator = Packages.mindustry.maps.generators.BaseGenerator;
let Team = Packages.mindustry.game.Team;
let Tiles = Packages.mindustry.world.Tiles;

// Listens for the map to finish loading completely
Events.on(WorldLoadEvent, event => {
    // Your code goes here
    Log.info("Map successfully loaded! Trying to place power nodes...");
    let cx = (Vars.world.width()/2);
    let cy = (Vars.world.height()/2);
    Vars.world.tile((cx-2),(cy-2)).setNet(Blocks.PowerNode,Team.sharded,0);
    Vars.world.tile((cx-4),(cy-4)).setNet(Blocks.PowerNode,Team.sharded,0);
    Log.info("Power nodes successfully placed! Connecting them...")
    let node1 = Vars.world.build((cx-2),(cy-2));
    let node2 = Vars.world.build((cx-4),(cy-4));
    if (node1 && node2 && node1.block instanceof PowerNode) {
        node1.connect(node2);
        Log.info("Power nodes connected successfully!");
    } else {
        Log.err("FAIL");
}
});

