window.addEventListener("DOMContentLoaded", (event) => {
let currentPlayer = 'x';
const winningCombinations = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']];

const cellElements = document.getElementsByClassName("cell")
for (let i = 0; i < cellElements.length; i++) {
    cellElements[i].addEventListener('click', startGame, false);
}

let restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', resetGame);

function startGame() {
if (this.innerText === '') {
   this.innerText = currentPlayer;
   this.setAttribute('data-player', currentPlayer);
}

checkWin();
if (currentPlayer === 'x') {
    currentPlayer = '0';
    } else {
        currentPlayer = 'x'
    }
}

function checkWin() {
let checkCells = document.querySelectorAll('[data-player="' + currentPlayer + '"]');
let valueCells = Array.from(checkCells, cell => cell.getAttribute('data-cell'));
let isFounded = winningCombinations.some(ai => {
   return ai.every(cell => valueCells.includes(cell));
});
let fullCells = document.querySelectorAll("[data-player]").length;
    if (isFounded == true) {
      winnerMessage.innerText = currentPlayer + " " + "won this game!";
    } else if (fullCells == 9) {
        winnerMessage.innerText = "Equality between players!";
    }
}

function resetGame() {
    for (let i = 0; i < cellElements.length; i++) {
        cellElements[i].innerText = '';
        cellElements[i].removeAttribute('data-player');
    }
currentPlayer = 'x';
winnerMessage.innerText = '';
}
});