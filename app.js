let userScore = 0;
let compScore = 0;
const playMove = document.querySelector("#move");
const userSc = document.querySelector("#user-score");
const compSc = document.querySelector("#comp-score");

const game = document.querySelectorAll(".gameOption");
const compChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
};

game.forEach((gameOption) => {
    gameOption.addEventListener("click", () => {
        const userChoice = gameOption.getAttribute("id");
        console.log("clicked " + userChoice);
        const compC = compChoice();
        console.log(compC);
        playGame(userChoice, compC);  // Pass userChoice and compC to playGame
    });
});

const showWinner = (userWin) => {
    if (userWin) {
        console.log("User wins this round");
        userScore++;
        console.log(userScore);
        userSc.innerText = userScore;
        playMove.innerText = "You Win";
        playMove.style.color = '#0ff';
    } else {
        console.log("Computer wins this round");
        compScore++;
        compSc.innerText = compScore;
        playMove.innerText = "Computer Wins";
        playMove.style.color = '#ff3a3a';
    }
}

const playGame = (userChoice, compC) => {  // Accept userChoice and compC as parameters
    if (userChoice === compC) {
        console.log('Game was Draw. Play Again');
        playMove.innerText = "Game was Draw. Play Again";
        playMove.style.color = '#89ff3a';
        return;
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            // scissors, paper
            userWin = compC === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            // rock, scissors
            userWin = compC === 'scissors' ? false : true;
        } else {
            // paper, rock
            userWin = compC === 'rock' ? false : true;
        }
        showWinner(userWin);
    }
};


const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userSc.innerText = userScore;
    compSc.innerText = compScore;
    playMove.innerText = "Play Your Move";
    playMove.style.color = '#fff';
});