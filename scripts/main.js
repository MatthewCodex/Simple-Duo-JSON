
Timer.schedule(function(){
    Log.info("This prints every 10 seconds");
}, 0, 10);



const flashlight = extend(LightBlock, "flashlight", {});