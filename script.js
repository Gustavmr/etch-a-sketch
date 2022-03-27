const container = document.querySelector("#container");

createGrid();

function createBlockLine () {
    let blockLine = document.createElement("div");
    blockLine.classList.add("blockLine");
    container.appendChild(blockLine);

    for (i = 1; i <= 4; i++) {
        let block = document.createElement("div");
        block.classList.add("block");
        block.textContent = "testing block";
        blockLine.appendChild(block);
    }

}

function createGrid () {
    for (x = 1; x <= 4; x++) {
        console.log(x);
        createBlockLine();
    }
}