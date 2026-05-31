function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);

  if (num === 0) return "Stone";
  else if (num === 1) return "Paper";
  else return "Scissor";
}

let humanScore = 0;
let computerScore = 0;

// const div = document.createElement("div");
// document.body.appendChild(div);
const gameContainer = document.createElement("div");
gameContainer.style.display = "flex";
gameContainer.style.flexDirection = "column";
gameContainer.style.alignItems = "center";
gameContainer.style.gap = "30px";

const div = document.createElement("div");
div.style.color = "white";
div.style.fontSize = "1.5rem";
div.style.textAlign = "center";

document.body.appendChild(gameContainer);
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.gap = "30px";
document.body.style.flexDirection = "column";
gameContainer.appendChild(div);

// function playRound(humanChoice, computerChoice) {
//   let result;

//   if (humanChoice === computerChoice) {
//     result = "Draw";
//   } else if (
//     (humanChoice === "Stone" && computerChoice === "Scissor") ||
//     (humanChoice === "Paper" && computerChoice === "Stone") ||
//     (humanChoice === "Scissor" && computerChoice === "Paper")
//   ) {
//     humanScore++;
//     result = "You win this round!";
//   } else {
//     computerScore++;
//     result = "Computer wins this round!";
//   }

//   div.innerHTML = `
//     <p>You: ${humanChoice}</p>
//     <p>Computer: ${computerChoice}</p>
//     <p>${result}</p>
//     <p>Score: ${humanScore} - ${computerScore}</p>
//   `;
// }

function playRound(humanChoice, computerChoice) {
  // Don't allow more rounds after game is over
  if (humanScore >= 5 || computerScore >= 5) {
    return;
  }

  let result;

  if (humanChoice === computerChoice) {
    result = "Draw";
  } else if (
    (humanChoice === "Stone" && computerChoice === "Scissor") ||
    (humanChoice === "Paper" && computerChoice === "Stone") ||
    (humanChoice === "Scissor" && computerChoice === "Paper")
  ) {
    humanScore++;
    result = "You win this round!";
  } else {
    computerScore++;
    result = "Computer wins this round!";
  }

  let winner = "";

  if (humanScore === 5) {
    winner = "<h2>You won the game! 🎉</h2>";
  } else if (computerScore === 5) {
    winner = "<h2>Computer won the game! 🤖</h2>";
  }

  div.innerHTML = `
    <p>You: ${humanChoice}</p>
    <p>Computer: ${computerChoice}</p>
    <p>${result}</p>
    <p>Score: ${humanScore} - ${computerScore}</p>
    ${winner}
  `;
}
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.textContent;
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  });
});