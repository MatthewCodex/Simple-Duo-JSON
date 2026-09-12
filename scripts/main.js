// Define a new Wall type
const retaliatoryWall = extend(Wall, "retaliatory-wall", {
    // Override the damage function
    damage(amount) {
        // Call the original damage behavior so the wall actually takes damage
        this.super$damage(amount);

        // Find the nearest enemy unit within a certain radius (e.g., 200 pixels)
        let target = Units.closestEnemy(this.team, this.x, this.y, 200, u => !u.dead);

        // If an enemy is found, shoot a projectile at them
        if (target != null) {
            // Use a standard bullet type (e.g., standard copper ammo bullet)
            // You can replace Bullets.standardCopper with other types like Bullets.flak, Bullets.artilleryPlastic, etc.
            Bullets.standardCopper.create(this, this.team, this.x, this.y, this.angleTo(target), 1.0, 1.0);
            
            // Optional: Create a visual effect at the wall's position
            Fx.shootBig.at(this.x, this.y);
        }
    }
});

// Set basic wall properties
retaliatoryWall.health = 1200;
retaliatoryWall.size = 2; // 2x2 wall
retaliatoryWall.requirements(Category.defense, ItemStack.with(Items.copper, 20, Items.graphite, 15));

Timer.schedule(function(){
    Log.info("This prints every 10 seconds");
}, 0, 10);
