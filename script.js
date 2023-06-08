function changeScreenSize () {
    let new_size = +slider.value;
    grid.style.gridTemplateColumns = `repeat(${new_size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${new_size}, 1fr)`;
    size_placeholder.textContent = `${new_size} x ${new_size}`;
}


let current_tool = 'pencil';
const color_picker = document.getElementById('color-picker');
const slider = document.getElementById('slider');
const grid = document.getElementById('grid');
const pencil = document.getElementById('pencil');
const eraser = document.getElementById('eraser');
const redo = document.getElementById('redo');
const size_placeholder = document.getElementById('size');

slider.addEventListener('change', changeScreenSize);


// TODO: grid-element: addEventListener('mouseDown', draw) + btns