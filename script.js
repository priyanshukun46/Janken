function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);

    if (num == 0) return "stone";
    else if (num == 1) return "paper";
    else return "scissor";
}

function getHumanChoice() {
    let input = prompt("Enter stone, paper or scissor");
    return input.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    console.log("You:", humanChoice);
    console.log("Computer:", computerChoice);

    if (humanChoice == computerChoice) {
        console.log("Draw");
        return;
    }

    if (
        (humanChoice == "stone" && computerChoice == "scissor") ||
        (humanChoice == "paper" && computerChoice == "stone") ||
        (humanChoice == "scissor" && computerChoice == "paper")
    ) {
        humanScore++;
        console.log("You win this round");
    } else {
        computerScore++;
        console.log("Computer wins this round");
    }

    console.log("Score:", humanScore, computerScore);
}

function playGame() {

    for (let i = 1; i <= 5; i++) {

        console.log(`--- Round ${i} ---`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // final winner
    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    }
    else {
        console.log("Game draw!");
    }
}

playGame();


