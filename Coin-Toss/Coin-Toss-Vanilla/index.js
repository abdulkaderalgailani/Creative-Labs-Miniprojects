function Toss() {
    // document.querySelector('.toss-button');
    console.log("Coin tossed");

    computerMove();
    userMove();
    checkMove();

}

function computerMove() {
    const tossChance = Math.random() 
        if (tossChance >= 0.5){
            return "Heads";
        } else {
            return "Tails";
        };
}

function userMove(){
    if (userMove === "Heads"){
        return "Heads";
    } else if (userMove === "Tails"){
        return "Tails";
    } else {
        return "Select a move";
    }
}
// console.log(userMove());


function checkMove(){
    const checkMove = userMove && computerMove;

    if (checkMove == true) {
        return console.log("You win");
    } else{
        return console.log('you lost');
    }
    return checkMove;
}
