function getComputerChoice() {
  const num = Math.floor(Math.random() * 3);

  if (num === 0) return "Stone";
  else if (num === 1) return "Paper";
  else return "Scissor";
}

let humanScore = 0;
let computerScore = 0;

const div = document.createElement("div");
document.body.appendChild(div);

function playRound(humanChoice, computerChoice) {
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

  div.innerHTML = `
    <p>You: ${humanChoice}</p>
    <p>Computer: ${computerChoice}</p>
    <p>${result}</p>
    <p>Score: ${humanScore} - ${computerScore}</p>
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