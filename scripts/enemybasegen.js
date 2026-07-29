const BaseGenerator = Packages.mindustry.maps.generators.BaseGenerator;
const Team = Packages.mindustry.game.Team;
const Tiles = Packages.mindustry.world.Tiles;

// 1. Fetch current live game states
let tiles = Vars.world.tiles;
let team = Team.crux;
let cores = Vars.state.teams.cores(team);
let sector = Vars.state.getSector();

// 2. Find a valid base reference spawn point
let spawn = Vars.spawns.getSpawnTiles().size > 0 
    ? Vars.spawns.getSpawnTiles().first() 
    : Vars.world.tile(Math.floor(Vars.world.width() / 2), Math.floor(Vars.world.height() / 2));

// 3. Initialize and run the BaseGenerator
let generator = new Packages.mindustry.maps.generators.BaseGenerator();
generator.generate(tiles, cores, spawn, team, sector, 0.75); // 0.75 = High threat layout

// 4. Force immediate engine synchronization
generator.postGenerate(); 

// 5. Vital live-map cache flushes
Vars.world.updateCenter();                     // Forces tile blocks to visually render
Vars.renderer.blocks.clearTiles();             // Re-draws block textures
Vars.pathfinder.updateBackground();            // Recalculates unit pathfinding routes
Vars.renderer.minimap.updateAll();             // Refreshes the minimap radar display

Log.info("Base successfully generated on live map!");
