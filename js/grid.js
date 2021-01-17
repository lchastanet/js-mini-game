export default class Grid {
    constructor(size) {
        this.state = this.build(size);
    }

    build(size = 10) {
        const container = document.getElementById("grid-container");

        let grid = [];

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let element = document.createElement("div");
                element.classList.add("cell");

                if ((i + j) % 2 == 0) {
                    element.classList.add("darkenCell");
                }

                container.appendChild(element);

                let id = i + 1 + "-" + (j + 1);
                element.id = id;
                element.addEventListener("click", (e) =>
                    console.log(e.target.id)
                );
                grid.push(id);
            }
        }

        return grid;
    }

    getEmptyCoord() {
        let coord = this.state[Math.floor(Math.random() * this.state.length)];

        this.state = this.state.filter((elem) => elem !== coord);

        return coord;
    }
}
