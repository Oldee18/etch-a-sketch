const size = 100

const color = "black"
const container = document.querySelector(".container")

const divCreator = function () {

    container.innerHTML= "";

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div")
        row.classList.add("row");

        for ( let j=0; j < size; j++) {
            let square = document.createElement("div")
            square.classList.add("square")

            square.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = color;
            })

        row.appendChild(square)
    }
    container.appendChild(row)
    }
}
divCreator()