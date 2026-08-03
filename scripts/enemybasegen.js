let BaseGenerator = Packages.mindustry.maps.generators.BaseGenerator;
let Team = Packages.mindustry.game.Team;
let Tiles = Packages.mindustry.world.Tiles;

let stop1times = Vars.content.getByName(ContentType.block, "m.-codex-stop1times");


// Listen for when any block finishes building
Events.on(BlockBuildEndEvent, event => {
    
    if (event.team != null && !event.breaking) {
        
        Log.info("A " + event.tile.block() + " was placed at X: " + event.tile.x + ", Y: " + event.tile.y + "by: " + event.team);
        
        // Change 'router' to the specific block name you want to target
        if (event.tile.block() === stop1times) {
            // Your custom response code goes here
            Vars.control.sound.stop();
            Log.info("Music reset");
            Vars.ui.hudfrag.showToast("Music reset");
            

        }
    }
    if (event.unit && event.unit.isPlayer()) {
        let player = event.unit.getPlayer();
        let blockName = event.tile.block().name;

        // Change 'router' to the specific block name you want to target
        if (event.tile.block() === stop1times) {
            // Your custom response code goes here
            Vars.control.sound.stop();
            Log.info("Music reset");
            Vars.ui.hudfrag.showToast("Music reset");
            

        }
    }

});
