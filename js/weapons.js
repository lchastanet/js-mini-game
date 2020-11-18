import Item from "./item.js";

export default class Weapons extends Item {
    constructor(position, img, name, damage) {
        super(position, img);
        this.name = name;
        this.damage = damage;
    }
}
