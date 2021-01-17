export default class Item {
    constructor(position, name) {
        this.name = name;
        this.position = this.generate(position);
    }

    generate(position) {
        document.getElementById(position).classList.add(this.name);

        return position;
    }
}
