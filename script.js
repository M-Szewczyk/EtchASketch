function createGrid(){
    for (let i = 0; i < (rows*columns); i++){
        const gridCell = document.createElement('div');
        gridCell.style.width = `${(GRIDSIZE/columns)-2}px`;
        console.log((GRIDSIZE/16)-2)
        gridCell.style.height = `${(GRIDSIZE/rows)-2}px`;
        gridCell.classList.add('cell');
        content.appendChild(gridCell);
        gridCell.addEventListener('mouseover',colorCell);

    }
}

function colorCell(){
    if (window.mouseDown) {
        this.style.backgroundColor = 'red';
    }
}

const GRIDSIZE = 600;
const rows = 16;
const columns = 16;

const container = document.querySelector('#container');
const header = document.querySelector('#header');
const content = document.querySelector('#content');
const footer = document.querySelector('#footer');

container.appendChild(content);
container.appendChild(header);
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

createGrid();