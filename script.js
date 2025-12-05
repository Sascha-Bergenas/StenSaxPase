const buttons = document.querySelectorAll(".buttons button");
const player = document.querySelector("#player-choice");
const computer = document.querySelector("#computer-choice");
const result = document.querySelector("#result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    console.log("Player choice:", playerChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer choice:", computerChoice);
    const resultOutput = getResult(playerChoice, computerChoice);
    console.log("Result output:", resultOutput);

    player.textContent = playerChoice;

    setTimeout(() => {
      computer.textContent = computerChoice;
    }, 1000);
    setTimeout(() => {
      result.textContent = resultOutput;
    }, 2000);
  });
});
function getComputerChoice() {
  const choice = ["Sten", "Sax", "Påse"];
  const randomise = Math.floor(Math.random() * choice.length);
  return choice[randomise];
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    result.style.color = "yellow";
    return "Oavgjort";
  }
  if (
    (playerChoice === "Sten" && computerChoice === "Sax") ||
    (playerChoice === "Sax" && computerChoice === "Påse") ||
    (playerChoice === "Påse" && computerChoice === "Sten")
  ) {
    result.style.color = "green";
    return "Du vann!";
  } else {
    result.style.color = "red";
    return "Du förlorar!";
  }
}

function resetScore() {
  player.textContent = "";
  computer.textContent = "";
  result.textContent = "";
}

document.getElementById("reset").addEventListener("click", resetScore);
