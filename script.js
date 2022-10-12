const boxes = document.querySelectorAll('.box');
const reset = document.querySelector('button');

let icon = 'X'
const toggle = () => {
    if ( icon === 'X' ) {
        icon = 'O';
    }    
    else {
        icon = 'X';
    }    
}

boxes.forEach( (e) => { e.addEventListener('click', 
    () => {
        if ( !e.innerHTML ) {
            e.innerHTML = `<h1>${icon}</h1>`;
            toggle();
        }
    });
});

const winningCombos =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetBoard = () => {
    boxes.forEach(
        (e) => {
            e.innerHTML = '';
        }
    )
}
reset.addEventListener('click', resetBoard)


const checkForWinner = () => {
    let xArr = [];
    let oArr = [];
    boxes.forEach(
        (box) => {
            if ( box.textContent ) {
                if ( box.textContent == 'X' ) {
                    xArr.push(parseInt(box.id));
                }    
                if ( box.textContent == 'O' ) {
                    oArr.push(parseInt(box.id));   
                }    
            }         
        }
    );
}

const declareWinner = (win) => {
    document.write = (`<h2>${win} wins!<h2>`);
}
console.log(declareWinner)