// Class for all entities in game

class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x = 200, this.y = 400);
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
    constructor() {
        super();
        this.sprite = 'enemy-bug.png';
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
const player = new Player();
//const enemy = new Enemy();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
