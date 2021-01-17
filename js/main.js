import Grid from "./grid.js";
import Weapon from "./weapon.js";
import Player from "./player.js";
import Obstacle from "./obstacle.js";

let grid = new Grid();

let obstacles = [];
let weapons = [];

//génération des obstacles
for (let i = 0; i < 10; i++) {
    let tree = new Obstacle(grid.getEmptyCoord());

    obstacles.push(tree);
}

// Instanciation de mes class armes
weapons.push(new Weapon(grid.getEmptyCoord(), "gun", 100));
weapons.push(new Weapon(grid.getEmptyCoord(), "knife", 20));
weapons.push(new Weapon(grid.getEmptyCoord(), "sword", 15));
weapons.push(new Weapon(grid.getEmptyCoord(), "spade", 10));

// Instanciation de mes class players
let player1 = new Player(grid.getEmptyCoord(), "playerOne");

let gap = addGap(player1.position);

function addGap(position) {
    position = position.split("-");

    let coords = [];
    let xPlus,
        xMinus,
        yPlus,
        yMinus,
        xPlusPlus,
        xMinusMinus,
        yPlusPlus,
        yMinusMinus;

    xPlus = [position[0], parseInt(position[1], 10) + 1];
    coords.push(xPlus.join("-"));

    yPlus = [parseInt(position[0], 10) + 1, position[1]];
    coords.push(yPlus.join("-"));

    xMinus = [position[0], parseInt(position[1], 10) - 1];
    coords.push(xMinus.join("-"));

    yMinus = [parseInt(position[0], 10) - 1, position[1]];
    coords.push(yMinus.join("-"));

    xPlusPlus = [parseInt(xPlus[0], 10) + 1, xPlus[1]];
    coords.push(xPlusPlus.join("-"));

    yPlusPlus = [yPlus[0], parseInt(yPlus[1], 10) - 1];
    coords.push(yPlusPlus.join("-"));

    xMinusMinus = [parseInt(xMinus[0], 10) - 1, xMinus[1]];
    coords.push(xMinusMinus.join("-"));

    yMinusMinus = [yMinus[0], parseInt(yMinus[1], 10) + 1];
    coords.push(yMinusMinus.join("-"));

    return coords;
}

gap.forEach(
    (item) => (grid.state = grid.state.filter((elem) => elem !== item))
);

let player2 = new Player(grid.getEmptyCoord(), "playerTwo");
