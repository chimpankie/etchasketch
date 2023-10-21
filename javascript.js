let etchPad = document.querySelector('#etchPad'); 



function createGrid(choice) {
    let grid = Number(choice);
    console.log(grid)
;    for (let i = 0; i<grid; i++){
        etchPad.style.display = 'inline-flex';
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
            if(rainbow){
                colorChoice = randomColour();
                cell.style.backgroundColor = `${colorChoice}`;
            } else {
                colorChoice = 'black';
                cell.style.backgroundColor = colorChoice;

            }
       


        })

    }
}

function randomColour(){
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

let createBtn = document.querySelector('#defaultGrid');
let resetBtn = document.querySelector('#resetGrid');
let rainbowBtn = document.querySelector('#getRainbow');
let rainbow = false;

rainbowBtn.addEventListener('click', () => {
    rainbow = !rainbow; 
    if(rainbow){
        rainbowBtn.textContent = 'Black Pen'}
        else {
            rainbowBtn.textContent = 'Technicolor!';
        };
})

createBtn.addEventListener('click', () => {
    let choice = prompt("How large would you like your EtchPad to be? Choose between 16 and 100", "50");
    createGrid(choice);
    createBtn.disabled = true;
})

resetBtn.addEventListener('click', () => {
    let cells = document.querySelectorAll('div');
    cells.forEach(function (cell) {
        cell.style.backgroundColor = "white";
    })
})

// fork this and then experiment with the grid size