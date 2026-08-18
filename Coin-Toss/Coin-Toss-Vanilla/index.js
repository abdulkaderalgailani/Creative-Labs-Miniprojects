function Toss() {
    // document.querySelector('.toss-button');
    console.log("Coin tossed");

    computerMove();
    console.log("computers move: " + computerChoice);
    console.log("You selected: " + userChoice);
    checkMove(userChoice, computerChoice);
    
    console.log("Results : " +moveResult);
    document.querySelector('.display-result').innerText = `${moveResult}  \n Your Choice: ${userChoice}`;

}

let userChoice = "Select a move";
let computerChoice;
let moveResult;

function computerMove() {
    const tossChance = Math.random() 
    if (tossChance >= 0.5){
        computerChoice = "Heads";
    } else {
        computerChoice = "Tails";
    }
    return computerChoice;
}

function userMove(move){
    if (move === "Heads"){
        userChoice = "Heads";
    } else if (move === "Tails"){
        userChoice = "Tails";
    } else {
        userChoice = "Select a move";
    }
    return userChoice;
}
// console.log(userMove());


function checkMove(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        moveResult = "You Won!!!";
    } else if(userChoice === "Select a move"){
        moveResult = "";
    }
    else {
        moveResult = "You Lost!!!";
    }
    return moveResult;  
}
