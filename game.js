function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}


function playRound(playerSelection, computerChoice) {
  // set player's condition
  let flag = "undefined";
  if (
    (playerSelection == "Paper" && computerChoice == "Rock") ||
    (playerSelection == "Rock" && computerChoice == "Scissors") ||
    (playerSelection == "Scissors" && computerChoice == "Paper")
  ) {
    flag = "win";
    player_score_value++;
  } else if (
    (playerSelection == "Rock" && computerChoice == "Paper") ||
    (playerSelection == "Paper" && computerChoice == "Scissors") ||
    (playerSelection == "Scissors" && computerChoice == "Rock")
  ) {
    flag = "lose";
    computer_score_value++;
  } else {
    flag = "tie";
  }

  // announcing result
  const resultBox = document.querySelector(".result-box");
  let result = document.createElement("div");
  result.classList.add("result");
  switch (flag) {
    case "win":
      result.textContent = "Nice job! You won";
      break;
    case "lose":
      result.textContent = "Oh no! You've lost!";
      break;
    case "tie":
      result.textContent = "A tie! Try again next time.";
      break;
  }
  resultBox.appendChild(result);
  roundNumber++;
}

function updateScoreBoard() {
  const player_score = document.querySelector(".player_score");
  const computer_score = document.querySelector(".computer_score");
  //display score
  player_score.textContent = `Your score: ${player_score_value}`;
  computer_score.textContent = `Computer score: ${computer_score_value}`;


}

let roundNumber = 1;
let player_score_value = 0;
let computer_score_value = 0
let clickCount = 0;
const btns = document.querySelectorAll(".btn");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    if (clickCount < 5) {
      const playerSelection = button.textContent; //get player choice
      const computerChoice = getComputerChoice();
      playRound(playerSelection, computerChoice);
      updateScoreBoard();
      clickCount++;
    } else {
      alert("It is the end!!")
    }
  });
});




