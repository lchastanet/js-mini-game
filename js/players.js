import Item from "./item.js";

export default class Players extends Item {
    constructor(position, img, name) {
        super(position, img);
        this.name = name;
    }
}
