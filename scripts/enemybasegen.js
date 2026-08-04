let BaseGenerator = Packages.mindustry.maps.generators.BaseGenerator;
let Team = Packages.mindustry.game.Team;
let Tiles = Packages.mindustry.world.Tiles;

let stop1times = Vars.content.getByName(ContentType.block, "m.-codex-stop1times");


// Listen for when any block finishes building
Events.on(BlockBuildEndEvent, event => {
    
    if (event.team != null && !event.breaking) {
        
        Log.info("A " + event.tile.block() + " was placed at X: " + event.tile.x + ", Y: " + event.tile.y + "by: " + event.team);
        
    }
    
});
