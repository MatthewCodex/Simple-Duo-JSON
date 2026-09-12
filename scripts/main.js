const wallBullet = extend(MissileBulletType, {});

wallBullet.speed = 6
wallBullet.damage = 60
wallBullet.lifetime = 60
wallBullet.homingPower = 0.05
wallBullet.homingRange = 75
wallBullet.frontColor = Color.valueOf('#ffffff')
wallBullet.backColor = Color.valueOf('#00875a')

const projectileWall = extendContent(Wall, "projectile-wall", {

    size: 1,                    // 1x1 tile size (use 2 for a large wall)
    health: 800,                // Amount of hitpoints the wall has
    chanceDeflect: 10,          // 10% chance to deflect incoming bullets (like a Phase Wall)
    flashHit: true,             // Flash white when hit
    
    // Requirements to build the wall
    requirements: ItemStack.with(
        Items.copper, 6,
        Items.lead, 4
    ),
    
    // Where it appears in the build menu
    category: Category.defense,
    buildVisibility: BuildVisibility.shown

  load(){
    this.super$load();
    this.region = Core.atlas.find("projectile-wall")
  },
  update(tile){
    this.super$update(tile);
    if (tile.ent().timer.get(this.shootWallBullet, 120)) {
      Bullet.create(wallBullet, this.getTeam(), this.x, this.y, this.rotation, 1, 1)
      print('it works');
    };
  }
});
projectileWall.shootWallBullet = projectileWall.timers++;
//projectileWall.health = 