function clearGrid () {
    grid.innerHTML = ""
}


function setGridSize () {
    gridSize = +slider.value;
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    sizePlaceholder.textContent = `${gridSize} x ${gridSize}`;
}


function fillGrid () {
    for (let i = 0; i < gridSize * gridSize; i++) {
        let grid_child = document.createElement('div');
        grid_child.classList.add('grid-child');
        grid.appendChild(grid_child);
    }
    gridElements = grid.querySelectorAll('.grid-child');
}


function createGrid () {
    clearGrid();
    setGridSize();
    fillGrid();
    addGridElementsListeners();
}


function addGridElementsListeners () {
    [...gridElements].forEach(el => el.addEventListener('mouseover', colorGridElement));
    [...gridElements].forEach(el => el.addEventListener('mousedown', colorGridElement));
}


function colorGridElement (e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (mouseDown){
        if (instrument == 'pencil'){
            e.target.style.backgroundColor = color;
        } else {
            e.target.style.backgroundColor = '#ffffff'
        }
    }
}


function changeColor () {
    color = colorPicker.value;
}


let color = "#000000"
let mouseDown = false;
let gridSize = 16;
let gridElements;
let instrument = 'pencil';

const colorPicker = document.getElementById('color-picker');
const slider = document.getElementById('slider');
const grid = document.getElementById('grid');
const pencil = document.getElementById('pencil');
const eraser = document.getElementById('eraser');
const redo = document.getElementById('redo');
const sizePlaceholder = document.getElementById('size');
createGrid(); // grid first setup

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;
colorPicker.onchange = changeColor;
slider.onchange = createGrid;
pencil.onclick = () => instrument = 'pencil';
eraser.onclick = () => instrument = 'eraser';
redo.onclick = createGrid;