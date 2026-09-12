
Timer.schedule(function(){
    Log.info("This prints every 10 seconds");
}, 0, 10);


const counterWall = extend(Wall, "counter-attack-wall", {
    health: 800,
    size: 1,
    update: true,

    // 1. Assign it to a build menu tab (e.g., Category.defense)
    category: Category.defense,

    // 2. Make it visible in menus and sandbox/editor lists
    buildVisibility: BuildVisibility.shown
});
