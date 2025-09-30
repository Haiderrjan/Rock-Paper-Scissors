`use strict`;

// VARABLES 

// SCORES 
let humanScore = 0;
let computerScore = 0;
let draws = 0;

// DOM SELECTORS
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const player_score = document.querySelector("#player-score");
const computer_score = document.querySelector("#computer-score");
const div = document.querySelector("#container-res");
const reset = document.querySelector("#reset-btn")


// CREATE ELEMENT
const player_won = document.createElement("p");
const computer_won = document.createElement("p");
const draw = document.createElement("p");
const final_score = document.createElement("p");





// EVENT LISTNERS
rock.addEventListener("click", function(){

    playRound("rock")
    finalScore();
})

paper.addEventListener("click", function(){

    playRound("paper")
    finalScore();
})

scissors.addEventListener("click", function(){

    playRound("scissors")
    finalScore();
})

reset.addEventListener("click", function(){
   resetbtn();
})


// FUNCTIONS  
 
// COMPUTER CHOICE 
function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 3);

  if (compChoice == 0) {
    return `rock`;
  } else if (compChoice == 1) {
    return `paper`;
  } else {
    return `scissors`;
  }
}




// PLAYS THE GAME 
function playRound(user) {

  if (rock.disbaled === true || paper.disbaled === true || scissors.disbaled === true) {
    return;
  }
  
    const computerC = getComputerChoice();
    const humanC = user;

    if (
      (humanC == `rock` && computerC == `scissors`) ||
      (humanC == `paper` && computerC == `rock`) ||
      (humanC == `scissors` && computerC == `paper`)
    ) {


      let player_number = player_score.innerHTML;
      player_number++
      player_score.innerHTML = player_number;

       if (document.contains(computer_won)){
        computer_won.remove();
      } else if (document.contains(draw)){
        draw.remove();
      }

      player_won.classList.add("game-ended-text")
      player_won.innerHTML = `Player won by using ${humanC} against ${computerC}`
      div.appendChild(player_won)
      return humanScore++;
    }

    if (
      (humanC == `rock` && computerC == `rock`) ||
      (humanC == `paper` && computerC == `paper`) ||
      (humanC == `scissors` && computerC == `scissors`)
    ) {

       if (document.contains(player_won)){
        player_won.remove();
      } else if (document.contains(computer_won)){
        computer_won.remove();
      }

      draw.classList.add("game-ended-text")
      draw.innerHTML = `It's a draw. Computer used ${computerC} and player used ${humanC}`
      div.appendChild(draw);
      return draws++;
    }

    if (
      (humanC == `rock` && computerC == `paper`) ||
      (humanC == `paper` && computerC == `scissors`) ||
      (humanC == `scissors` && computerC == `rock`)
    ) {

      let number = computer_score.innerHTML;
      number++
      computer_score.innerHTML = number;
    
      if (document.contains(player_won)){
        player_won.remove();
      } else if (document.contains(draw)){
        draw.remove();
      }
      
      computer_won.classList.add("game-ended-text")
      computer_won.innerHTML = `Computer won by using ${computerC} against ${humanC}`
      div.appendChild(computer_won);
      return computerScore++;
    }
  }


// END RESULTS
function finalScore() {

  const points = 5
  const matchs = humanScore + computerScore + draws

  if (points === humanScore || points === computerScore) {
    rock.disbaled = true;
    paper.disbaled = true;
    scissors.disbaled = true;
   final_score.classList.add("game-ended-text")
    final_score.innerHTML = `Game Ended. Played 5 games And The Scores Are:<br>
                            Computer Score: ${computerScore}<br>
                            Human Score: ${humanScore}<br>
                            Draws: ${draws} `
      div.appendChild(final_score);
  }
} 



