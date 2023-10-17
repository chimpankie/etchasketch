let etchPad = document.querySelector('#etchPad'); 


function changeColor(){
    console.log('click');
    if (cell.style.color === 'white'){
        cell.style.color = 'black';
    } else if (cell.style.color === 'black'){
        cell.style.color = 'white';
    }
}

function createGrid(choice) {
    let grid = Number(choice);
    console.log(grid)
;    for (let i = 0; i<grid; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        createCells(row, grid);
        etchPad.appendChild(row);
        

    }
}

function createCells(row, grid) {
    for (let i = 0; i<grid; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
        let cells = document.querySelectorAll('.cell');
     
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('on');
        })
        cell.addEventListener('touchmove', () => {
            cell.classList.add('on');
        })
    }
}

let createBtn = document.querySelector('#defaultGrid');
let resetBtn = document.querySelector('#resetGrid');

createBtn.addEventListener('click', () => {
    let choice = prompt("How large would you like your EtchPad to be? Choose between 16 and 100");
    createGrid(choice);
})

resetBtn.addEventListener('click', () => {
    let cells = document.querySelectorAll('div');
    cells.forEach(function (cell) {
        cell.classList.remove('on');
    })
})

// fork this and then experiment with the grid size