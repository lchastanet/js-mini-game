import Item from "./item.js";

export default class Obstacle extends Item {
    constructor(position) {
        super(position, "tree");
    }
}
