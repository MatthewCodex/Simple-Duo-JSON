const fragBullet = extend(BasicBulletType, {
	width: 10,
	height: 10,
	speed: 6,
	lifetime: 20,
	damage: 6,
	sprite: "frag",
	backColor: Color.valueOf("ff0000"),
	frontColor: Color.valueOf("ffffff"),
	
});

const fragWall = extend(Wall, "frag-wall", {});
const fragWallLarge = extend(Wall, "frag-wall-large", {});

fragWall.buildType = () => extend(Wall.WallBuild, fragWall, {
    collision(bullet) {
        this.super$collision(bullet);
        //create crystal bullet
        if(Mathf.chance(0.5)) {
            for(var i = 0; i < 4; i++) {
                fragBullet.create(this, this.x, this.y, (360 / 4) * i + Mathf.random(16));
            }
        }

        return true;

    }
});

fragWallLarge.buildType = () => extend(Wall.WallBuild, fragWallLarge, {
    collision(bullet) {
        this.super$collision(bullet);
        //create crystal bullet
        if(Mathf.chance(0.5)) {
            for(var i = 0; i < 8; i++) {
                fragBullet.create(this, this.x, this.y, (360 / 8) * i + Mathf.random(16));
            }
        }

        return true;

    }
});