
Timer.schedule(function(){
    Log.info("This prints every 10 seconds");
}, 0, 10);


// 1. Define the custom bullet type the wall will fire back
const counterBullet = new BasicBulletType(4, 25); // Speed: 4, Damage: 25
counterBullet.lifetime = 60; // How long the bullet travels (in ticks)
counterBullet.knockback = 1.5;
counterBullet.bulletWidth = 8;
counterBullet.bulletHeight = 10;

// 2. Define the custom counter-attacking Wall block
const counterWall = extend(Wall, "counter-attack-wall", {
    // Basic block properties
    health: 800,
    size: 1,
    update: true // Allows the block to execute update ticks if needed
    // 1. Assign it to a build menu tab (e.g., Category.defense)
    category: Category.defense,

    // 2. Make it visible in menus and sandbox/editor lists
    buildVisibility: BuildVisibility.shown
});

// 3. Override the Building entity structure to modify damage behavior
counterWall.buildType = () => extend(Wall.WallBuild, counterWall, {
    collision(bullet) {
        this.super$collision(bullet);
        //create crystal bullet
        if(this.health < 228) {
            if(Mathf.chance(0.05)) {
                for(var i = 0; i < 4; i++) {
                    counterBullet.create(this, this.x, this.y, (360 / 4) * i + Mathf.random(16));
                }
            }
        }
        return true;
    }
});