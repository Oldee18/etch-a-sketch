const size = 8

const container = document.querySelector(".container")

const divCreator = function () {

    for (let i = 0; i == size; i++) {
        let row = document.createElement("div")
        div.classList.add("row");

        for ( let j=0; j == size; j++) {
            let square = document.createElement("div")
            div.classList.add("square")

            square.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = black;
            })

        row.appendChild(square)
    }
    container.appendChild(row)
    }
}
divCreator()