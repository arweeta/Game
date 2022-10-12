//DOM elements (querySelectors)
const boxes = document.querySelectorAll('.box');
const reset = document.querySelector('button');

//home page with start game button


//noughts and crosses and toggle between taking turns
let icon = 'X'
const toggle = () => {
    if ( icon === 'X' ) {
        icon = 'O';
    }    
    else {
        icon = 'X';
    }    
}


//function to take a turn
boxes.forEach( (e) => { e.addEventListener('click', 
    () => {
        if ( !e.innerHTML ) {
            e.innerHTML = `<h1>${icon}</h1>`;
            toggle();
        }
    });
});


//check for winner
const winningCombos =[
    //Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Verticle
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diaganol
    [0, 4, 8],
    [2, 4, 6]
]



//function to reset the board
//clear all boxes
//display winner function
const resetBoard = () => {
    boxes.forEach(
        (e) => {
            e.innerHTML = '';
        }
    )
}
// Event Listener
reset.addEventListener('click', resetBoard)


//function to check for winner/loser or draw
const checkForWinner = () => {
    let xArr = [];
    let oArr = [];
    // create arrays of box numbers for Xs and Os
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


//using arrays to check for winner
const declareWinner = (win) => {
    alertBox.innerHTML = 
}
//if no winner == draw
//end game and show display winner screen


//function to display winner
//have an alert type message
//replay button
//home button