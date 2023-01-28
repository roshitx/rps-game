window.onload = function () {
    OpenBootstrapPopup();
};
function OpenBootstrapPopup() {
    $("#simpleModal").modal('show');
}

const scissor = "scissors",
  paper = "paper",
  rock = "rock";
const moves = ["scissors", "paper", "rock"];
const options = document.querySelector(".game-options");
const message = document.getElementById("message");
const playerImg = document.querySelector(".player-1 img");
const botImg = document.querySelector(".player-2 img");

let playerMove = (botMove = "");

function getRandomMove() {
  return moves[Math.floor(Math.random() * 3)];
}

options.addEventListener("click", (event) => {
  botMove = getRandomMove();
  playerMove = event.target.dataset.id;
  options.style.pointerEvents = "none";
  console.log(playerMove, botMove);
  playerImg.src = `images/${playerMove}.png`;
  playerImg.classList.remove('animate-1');
  botImg.src = `images/${botMove}.png`;
  botImg.classList.remove('animate-2');
  checkWinner();
});

function checkWinner() {
    if(playerMove == botMove){
        message.innerHTML = "draw!";
    } else if((playerMove == scissor && botMove == paper) || 
    (playerMove == paper && botMove == rock) || (playerMove == rock && botMove == scissor)){
        message.innerHTML = "you win!";
    } else {
        message.innerHTML = "you lose!";
    }
    restart();
}

function restart() {
    setTimeout(() => {
        botMove = getRandomMove();
        message.innerHTML = "start!";
        playerImg.src = 'images/hand.png';
        playerImg.classList.add('animate-1');
        botImg.src = 'images/hand.png';
        botImg.classList.add('animate-2');
        options.style.pointerEvents = "";
    }, 2000);
}
