export default class Grid {
    constructor(size) {
        this.state = this.build(size);
    }

    build(size = 10) {
        const container = document.getElementById("grid-container");

        let grid = [];

        // Cette boucle génère 10 lignes
        for (let i = 0; i < size; i++) {
            // Cette boucle génère 10 colonnes
            for (let j = 0; j < size; j++) {
                let element = document.createElement("div"); // Création des elements div
                element.classList.add("cell"); // Ajout des class cell à mes div

                if ((i + j) % 2 == 0) {
                    element.classList.add("yellowbg"); // Je fais en sorte que une case sur deux soit jaune avec un modulo
                }

                container.appendChild(element); // J'ajoute l'élément enfant au parent

                let id = i + 1 + "-" + (j + 1); // Chaine de caractère mais qui est aussi un id unique
                element.id = id; // ajout de l'id a l element html
                element.addEventListener("click", (e) =>
                    console.log(e.target.id)
                );
                grid.push(id); // J'ajoute l'id au tableau
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
