// Class for all entities in game

class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }

    update(dt) {
        this.isOutOfBoundsX = this.x > 5;
        this.isOutOfBoundsY = this.y < 1;

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x*100, this.y*80);
    }
}

// Player

class Player extends Entity {
    constructor() {
        super();
        this.sprite += 'char-princess-girl.png';
    }
}

// Enemies our player must avoid

class Enemy extends Entity {
    constructor(x, y) {
        super();
        this.sprite += 'enemy-bug.png';
        this.x = x;
        this.y = y;
    }

    update(dt) {
        super.update();
        if(this.isOutOfBoundsX) {
            this.x = -1;
        }
        else {
            this.x += dt;
        }
    }
}

// Instantiates  objects

const player = new Player();
const allEnemies = [...Array(3)].map((_,i) => new Enemy(0, i+0.8));

// Listens for key presses and sends the keys to the Player.handleInput() method


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
