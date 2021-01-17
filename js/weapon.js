import Item from "./item.js";

export default class Weapon extends Item {
    constructor(position, name, damage) {
        super(position, name);
        this.damage = damage;
    }
}
