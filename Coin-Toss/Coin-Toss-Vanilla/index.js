// ================================
// MAIN TOSS FUNCTION
// Handles one full coin toss round
// ================================
function Toss() {
    // Logs when the Toss button is clicked
    console.log("Coin tossed clicked");

    // Prevents the game from running if no option is selected
    if (userChoice === "Select a move") {
        alert("Select a move");
        return;
    }

    // Generates the computer's random choice
    computerMove();

    console.log("computers move: ", computerChoice);
    console.log("You selected: ", userChoice);

    // Compares user choice with computer choice
    checkMove(userChoice, computerChoice);

    console.log("Results : ", moveResult);

    // Displays the round result and user's selected choice
    document.querySelector('.display-result').innerText =
        `${moveResult}  \n Your Choice: ${userChoice}`;

    // Updates wins or losses
    scoreDisplay(moveResult);

    // Displays the updated score
    document.querySelector('.score').innerText =
        `Wins: ${scoreBoard.wins} Losses: ${scoreBoard.losses}`;

    console.log(
        `Score display wins: ${scoreBoard.wins} Score display losses: ${scoreBoard.losses}`
    );
}


// ================================
// GAME VARIABLES
// ================================

// Stores the user's selected side
let userChoice = "Select a move";

// Stores the computer's random side
let computerChoice;

// Stores the result of the round
let moveResult;

// Stores total wins and losses
let scoreBoard = {
    wins: 0,
    losses: 0
};


// ================================
// RESET SCORE
// Resets both wins and losses to 0
// ================================
function resetScore() {
    scoreBoard.wins = 0;
    scoreBoard.losses = 0;

    // Updates the score shown on the page
    document.querySelector('.score').innerText =
        `Wins: ${scoreBoard.wins} Losses: ${scoreBoard.losses}`;

    console.log(
        `Reset Score - display wins: ${scoreBoard.wins} Score display losses: ${scoreBoard.losses}`
    );
}


// ================================
// COMPUTER MOVE
// Randomly selects Heads or Tails
// ================================
function computerMove() {
    const tossChance = Math.random();

    if (tossChance >= 0.5) {
        computerChoice = "Heads";
    } else {
        computerChoice = "Tails";
    }

    return computerChoice;
}


// ================================
// USER MOVE
// Saves the option selected by the user
// ================================
function userMove(move) {
    if (move === "Heads") {
        userChoice = "Heads";
    } else if (move === "Tails") {
        userChoice = "Tails";
    } else {
        userChoice = "Select a move";
    }

    return userChoice;
}

// console.log(userMove());


// ================================
// CHECK MOVE
// Determines whether the user won or lost
// ================================
function checkMove(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        moveResult = "You Won!!!";
    } else {
        moveResult = "You Lost!!!";
    }

    return moveResult;
}


// ================================
// SCORE DISPLAY
// Updates the scoreboard based on result
// ================================
function scoreDisplay(moveResult) {
    if (moveResult === "You Won!!!") {
        scoreBoard.wins++;
    } else {
        scoreBoard.losses++;
    }
}