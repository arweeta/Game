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


//if box empty & selected write noughts or crosses
//once turn taken, toggle to other player
//check for winner

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
//using arrays to check for winner
//if no winner == draw
//end game and show display winner screen

//function to display winner
//have an alert type message
//replay button
//home button