let gridSize;
let container = document.querySelector(".container");
let clearBtn = document.querySelector('#clear');
let resizeBtn = document.querySelector('#resize');
let colorSelector = document.querySelector('#color-select');
let grid = document.querySelector('.grid');
let tileSize;
let tileColor = '#000000';

function size() {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    gridSize = prompt("grid size (above 1 and 100 or less)");
    if (isNaN(gridSize) || gridSize < 2 || gridSize > 40) {
        size();
        
    } else {
        tileSize = (500 / gridSize);
        createGrid();
    }

    
}

function draw(e) {
    this.style['background-color'] = tileColor;
}

function clear() {
    let tile = document.querySelectorAll(".tile");
    tile.forEach(x => x.style['background-color'] = 'white');
}

function createGrid() {
    for (i = 0; i < gridSize; i++) {
        let square = document.createElement('div');
        square.style["display"] = 'flex';
        for (j = 0; j < gridSize; j++) {
            let square2 = document.createElement('div');
            square2.style['background-color'] = 'white';
            square2.style['height'] = `${tileSize-2}px`;
            square2.style['width'] = `${tileSize-2}px`;
            square2.style['border'] = '1px solid grey';
            square2.classList.add('tile');
            square2.addEventListener('click', draw);
            square.appendChild(square2);
        }
    
        grid.appendChild(square);
    }
}

function changeColor(e) {
    console.log('color changed')
    tileColor = e.target.value;
}

size();
clearBtn.addEventListener('click', clear);
resizeBtn.addEventListener('click', size);
colorSelector.addEventListener('change', changeColor)


