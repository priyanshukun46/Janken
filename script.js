function getComputerChoice(){
   const num = Math.floor((Math.random() *3) +1);
   if(num == 1){
    return "stone";
   }
   else if(num ==2){
    return "paper";
   }
   else{
    return "scissor"
   }

}

console.log(getComputerChoice())

// human block;
function getHumanChoice(){
    let input = prompt(" enter stone , paper  or scissor");

    return input.toLowerCase();
}

// console.log(getHumanChoice());

let humanScore =0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        humanScore ++;
        computerScore ++;
    }
    else if(humanChoice =="stone"){
        if(computerChoice == "paper"){
           computerScore++;
        }
        else{
           humanScore++;
        }
    }
     else if(humanChoice =="paper"){
        if(computerChoice == "scissor"){
            computerScore++;
        }
        else{
            humanScore++;
        }
    }
    else if(humanChoice =="scissor"){
        if(computerChoice == "stone"){
            computerScore++;
        }
        else{
            humanScore++;
        }
    }

   return (humanScore,computerScore);

}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let round =playRound(humanSelection, computerSelection);

function playGame(round ,times){

}

function Winner(round){
     if(humanScore==computerScore){
       return("match draw")
    } 
    else if(humanScore > computerScore){
       return("You Won :)");
    }
    else{
        return("You lost the game (: ");
    }
}

console.log(Winner());





