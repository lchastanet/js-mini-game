import Grid from "./grid.js";
import Weapons from "./weapons.js";
import Players from "./players.js";
import Obstacles from "./obstacles.js";

let grid = new Grid();

let obstacles = [];
let weapons = [];

//génération des obstacles
for (let i = 0; i < 4; i++) {
    let tree = new Obstacles(grid.getEmptyCoord(), "url('assets/tree.png')");

    obstacles.push(tree);
}

// Instanciation de mes class armes
weapons.push(
    new Weapons(grid.getEmptyCoord(), "url('assets/gun.png')", "gun", 100)
);
weapons.push(
    new Weapons(grid.getEmptyCoord(), "url('assets/knife.png')", "knife", 20)
);
weapons.push(
    new Weapons(grid.getEmptyCoord(), "url('assets/sword.png')", "sword", 15)
);
weapons.push(
    new Weapons(grid.getEmptyCoord(), "url('assets/spade.png')", "spade", 10)
);

// Instanciation de mes class players
let player1 = new Players(
    grid.getEmptyCoord(),
    "url('assets/ninja-player1.png')",
    "frontboy"
);

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

let player2 = new Players(
    grid.getEmptyCoord(),
    "url('assets/ninja-player2.png')",
    "backgirl"
);
