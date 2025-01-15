let size = 16
const gridSizeBtn = document.querySelector(".gridsizebtn")
const color = "black"
const container = document.querySelector(".container")

 function divCreator(size) {

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

gridSizeBtn.addEventListener("click", () => {
    let newSize = prompt("Enter the number of squares for each side")
    newSize = parseInt(newSize)
     if (newSize > 0 && newSize <= 100) {
        divCreator(newSize)
     } else {
        alert("Please enter a valid number between 1 and 100")
     }
})