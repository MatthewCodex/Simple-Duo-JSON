let BaseGenerator = Packages.mindustry.maps.generators.BaseGenerator;
let Team = Packages.mindustry.game.Team;
let Tiles = Packages.mindustry.world.Tiles;

// Listen for when any block finishes building
Events.on(BlockBuildEndEvent, event => {
    // 1. Check if the block was placed by a player (and not broken/deconstructed)
    // 2. Check if the placed block matches your target block (e.g., a Router)
    if (event.team != null && !event.breaking) {
        
        // --- YOUR CUSTOM CODE HERE ---
        Log.info("A " + event.tile.block() + "was placed at X: " + event.tile.x + ", Y: " + event.tile.y + "by:" + event.team);
        
        
    }
});
