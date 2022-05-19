let playerSelection;
const computerSelection = computerPlay();
let result;
document.getElementById("rockBTN")
document.getElementById("paperBTN")
document.getElementById("scissorsBTN")
document.getElementById("result_");
document.getElementById("user_choice");
document.getElementById("cmp_choice");
document.getElementById("drws");
document.getElementById("user_score");
document.getElementById("cmp_score");
document.getElementById("round_")







function computerPlay() {
  var things = ["rock", "paper", "scissors"];
  var thing = things[Math.floor(Math.random() * things.length)];
  return thing;
}




function PlayRound(playerSelection, computerSelection) {
  returnResults(playerSelection,computerSelection);
  user_choice.textContent = playerSelection;
  cmp_choice.textContent = computerSelection;
  if (playerSelection === computerSelection){
    return  result= "It's a draw!";}
  else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return result= "You lose!";
    } else if (computerSelection == "scissors") {
      return result= "You win!";
    } 
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return result= "You win!";
    } else if (computerSelection == "scissors") {
      return result= "You lose!";
    } 
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return result= "You win!";
    } else if (computerSelection == "rock") {
      return result= "You lose!";
    }
  } 
  
}



rockBTN.addEventListener("click", () => {
result_.textContent=PlayRound("rock",computerPlay());
round_.textContent++;
});

paperBTN.addEventListener("click", ()=>{
result_.textContent=PlayRound("paper",computerPlay());
round_.textContent++;
});

scissorsBTN.addEventListener("click", () => {
  result_.textContent = PlayRound("scissors", computerPlay());
  round_.textContent++;
});


function returnResults(playerSelection,computerSelection) {
  if (user_score.textContent == 5 || cmp_score.textContent == 5){
    gameOver();
  } 
  
  if (playerSelection === computerSelection) {
    return drws.textContent++;
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return cmp_score.textContent++;
    } else if (computerSelection == "scissors") {
      return user_score.textContent++;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return user_score.textContent++;
    } else if (computerSelection == "scissors") {
      return cmp_score.textContent++;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return user_score.textContent++;
    } else if (computerSelection == "rock") {
      return cmp_score.textContent++;
    }
  }
}

function gameOver(){
  if(user_score.textContent == 5){
    window.location.replace("youwin.html");
  }else if (cmp_score.textContent == 5) {
    window.location.replace("compwin.html");
  }
  
}









    