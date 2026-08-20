function Toss() {
    // document.querySelector('.toss-button');
    console.log("Coin tossed clicked");
    if (userChoice === "Select a move"){
        alert("Select a move");
        return;
    }
    computerMove();
    console.log("computers move: ", computerChoice);
    console.log("You selected: ", userChoice);
    checkMove(userChoice, computerChoice);
    
    console.log("Results : ", moveResult);
    document.querySelector('.display-result').innerText = `${moveResult}  \n Your Choice: ${userChoice}`;
    scoreDisplay(moveResult);
    document.querySelector('.score').innerText = `Wins: ${scoreBoard.wins} Losses: ${scoreBoard.losses}`
    console.log(`Score display wins: ${scoreBoard.wins} Score display losses: ${scoreBoard.losses}`);

}

let userChoice = "Select a move";
let computerChoice;
let moveResult;
let scoreBoard = { wins: 0, losses: 0};

function resetScore(){
    scoreBoard.wins = 0;
    scoreBoard.losses = 0;

    document.querySelector('.score').innerText = `Wins: ${scoreBoard.wins} Losses: ${scoreBoard.losses}`
    console.log(`Reset Score - display wins: ${scoreBoard.wins} Score display losses: ${scoreBoard.losses}`);
}

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
    } else {
        moveResult = "You Lost!!!";
    }
    return moveResult;  
}

function scoreDisplay(moveResult){
    if (moveResult === "You Won!!!"){
        scoreBoard.wins +=1;
    } else{
        scoreBoard.losses +=1;
    }
}