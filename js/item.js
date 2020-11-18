export default class Item {
    constructor(position, img) {
        this.img = img;
        this.position = this.generate(position);
    }

    generate(position) {
        document.getElementById(position).style.backgroundImage = this.img;
        document.getElementById(position).style.backgroundSize = "cover";

        return position;
    }
}
