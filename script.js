function createGrid(rows, columns){
    for (let i = 0; i < (rows*columns); i++){
        const gridCell = document.createElement('div');
        gridCell.style.width = `${(GRIDSIZE/columns)-2}px`;
        gridCell.style.height = `${(GRIDSIZE/rows)-2}px`;
        gridCell.classList.add('cell');
        content.appendChild(gridCell);
        gridCell.addEventListener('mouseover',colorCell);

    }
}

function clearGrid(){
    const children = content.children;
    for (let i = 0; i < children.length; i++){
        let child = children[i];
        child.style.backgroundColor = "white";
    }
}

function colorCell(){
    if (window.mouseDown) {
        this.style.backgroundColor = 'red';
    }
}

function addButton(text, func){
    button = document.createElement('button');
    button.classList.add('button');
    button.textContent = text;
    button.addEventListener('click',func);
    return button;
}

function addTextBox(){
    textBox = document.createElement('input');
    textBox.classList.add('textBox');
    textBox.type = 'text';
    return textBox;
}

function changeGridSize(){
    let input = document.querySelector('input');
    let inputContent = input.value;
    if (inputContent > 1 && inputContent < 101){
        content.innerHTML = '';
        createGrid(inputContent, inputContent)
    }
    else {
        alert("Type in a number between 2 and 100!")
    }
    input.value = '';
}

const GRIDSIZE = 600;
let rows = 16;
let columns = 16;

const container = document.querySelector('#container');
const header = document.querySelector('#header');
const content = document.querySelector('#content');
const footer = document.querySelector('#footer');

container.appendChild(header);
container.appendChild(content);
container.appendChild(footer);

content.style.width = `${GRIDSIZE}px`;
content.style.height = `${GRIDSIZE}px`;

window.mouseDown = false;
document.onmousedown = function() {
    window.mouseDown = true;
}
document.onmouseup = function() {
    window.mouseDown = false;
}

const title = document.createElement('h1')
title.textContent = "Etch-a-Sketch";
header.appendChild(title);
header.appendChild(addButton('Reset', clearGrid));
createGrid(rows, columns);
footer.appendChild(addTextBox());
footer.appendChild(addButton('Change the grid size', changeGridSize))
