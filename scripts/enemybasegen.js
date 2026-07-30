let BaseGenerator = Packages.mindustry.maps.generators.BaseGenerator;
let Team = Packages.mindustry.game.Team;
let Tiles = Packages.mindustry.world.Tiles;

Events.on(PlayEvent, event => {
    // Triggers exactly when the core lands and gameplay begins
    Log.info("Core has landed! Running initialization script...");
    
    // Example: Give the player some starting items
    // 1. Define your positions (change these to coordinates near your player)
let x1 = 10, y1 = 10;
let x2 = 14, y2 = 10;

// 2. Set the blocks on the map for Team Sharded (yellow/player team)
Vars.world.tile(x1, y1).setBlock(Blocks.powerNode, Team.sharded);
Vars.world.tile(x2, y2).setBlock(Blocks.powerNode, Team.sharded);

// 3. Fetch the building entities from the tiles
let node1 = Vars.world.build(x1, y1);
let node2 = Vars.world.build(x2, y2);

// 4. Safely connect them if both placed successfully
if (node1 && node2 && node1.block instanceof PowerNode) {
    node1.connect(node2);
    Log.info("Power nodes connected successfully!");
} else {
    Log.err("Failed to connect: Ensure coordinates are valid and clear of obstacles.");
}

});
