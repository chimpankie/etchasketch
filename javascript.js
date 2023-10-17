let etchPad = document.querySelector('#etchPad'); 


function changeColor(){
    console.log('click');
    if (cell.style.color === 'white'){
        cell.style.color = 'black';
    } else if (cell.style.color === 'black'){
        cell.style.color = 'white';
    }
}

function createGrid() {
    for (let i = 0; i<16; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        createCells(row);
        etchPad.appendChild(row);
        

    }
}

function createCells(row) {
    for (let i = 0; i<16; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        console.log(cell.style.color); 
        row.appendChild(cell);
        let cells = document.querySelectorAll('.cell');
     
        cell.addEventListener('mouseenter', () => {
            cell.classList.add('on');
        })
    }
}

let createBtn = document.querySelector('#defaultGrid');
let resetBtn = document.querySelector('#resetGrid');

createBtn.addEventListener('click', () => {
    createGrid();
})

resetBtn.addEventListener('click', () => {
    let cells = document.querySelectorAll('div');
    cells.forEach(function (cell) {
        cell.classList.remove('on');
    })
})

// fork this and then experiment with the grid size