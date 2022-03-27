function createBlockLine (dim) {
    let blockLine = document.createElement("div");
    blockLine.classList.add("blockLine");
    container.appendChild(blockLine);

    for (i = 1; i <= dim; i++) {
        let block = document.createElement("div");
        block.classList.add("block");
        blockLine.appendChild(block);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid (dim) {
    for (x = 1; x <= dim; x++) {
        console.log(x);
        createBlockLine(dim);
    }
}

function highlightBlock (e) {
    e.target.classList.add("hover");
}

function resetGrid() {
    allBlocks.forEach(block => block.classList.remove("hover")); 
    let dimension = Math.min(window.prompt("please select # of blocks per side",10),100);
    console.log(dimension); 
    removeAllChildNodes(container);
    createGrid(dimension);
    let allNewBlocks = document.querySelectorAll(".block");
    allNewBlocks.forEach(block => block.addEventListener("mouseover", highlightBlock));
}

const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
createGrid(10);
const allBlocks = document.querySelectorAll(".block");

allBlocks.forEach(block => block.addEventListener("mouseover", highlightBlock));
reset.addEventListener("click",resetGrid);



