`use strict`;

// to count scores
let humanScore = 0;
let computerScore = 0;
let draws = 0;

// ui function
playRound();
finalScore();

// to count who wins
function finalScore() {
  console.log(`Game ended. Played 5 games and the scores are:
draws: ${draws}
computer score: ${computerScore}
Human score: ${humanScore} `);

  if (humanScore > computerScore) {
    console.log(`Human wins yipee!`);
  } else if (humanScore < computerScore) {
    console.log(`You loose nooooo :( `);
  } else {
    console.log(`its a draw booooring :| `);
  }
}

// playing the rounds
function playRound() {
  for (let i = 0; i < 5; i++) {
    const computerC = getComputerChoice();
    const humanC = getHumanChoice();

    if (
      (humanC == `rock` && computerC == `scissors`) ||
      (humanC == `paper` && computerC == `rock`) ||
      (humanC == `scissors` && computerC == `paper`)
    ) {
      alert(`you win!`);
      humanScore++;
    }

    if (
      (humanC == `rock` && computerC == `rock`) ||
      (humanC == `paper` && computerC == `paper`) ||
      (humanC == `scissors` && computerC == `scissors`)
    ) {
      alert(`you draw!`);
      draws++;
    }

    if (
      (humanC == `rock` && computerC == `paper`) ||
      (humanC == `paper` && computerC == `scissors`) ||
      (humanC == `scissors` && computerC == `rock`)
    ) {
      alert(`you lose!`);
      computerScore++;
    }
  }
}

// computer choice
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

//human choice
function getHumanChoice() {
  while (true) {
    const user = prompt(`Rock, Paper or Scissors?`).toLowerCase();
    if (user == `rock` || user == `paper` || user == `scissors`) {
      return user;
    } else {
      alert(`please try again!`);
    }
  }
}
