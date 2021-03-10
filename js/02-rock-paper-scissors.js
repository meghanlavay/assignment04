let userChoice = prompt("Do you choose rock, paper, or scissors?");
let computerChoice = Math.floor(Math.random()) * 3;
if(computerChoice < 1) {
    computerChoice = "rock";
} else if(computerChoice <= 2) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

let compareChoice = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
    }
    if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "You win!";
        } else {
            return "You lose";
        }
    }
    if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "You win!";
        } else {
            return "You lose";
        }
    }
    if(choice1 === "scissors") {
        if(choice2 === "paper") {
            return "You win!";
        } else {
            return "You lose";
        }
    }
    else {
        alert( "That is not a choice. Please choose rock, paper, or scissors");
        let userChoice = prompt("Do you choose rock, paper, or scissors?)");
    }
};

console.log(compareChoice(userChoice, computerChoice));
