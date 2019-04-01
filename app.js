// DOM element selectors  and variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById("computer-score");
const scoreBoarc_div = document.querySelector(".score-board");
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById('s');
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

// Computer Choice
const getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
const convertToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

const win = (userChoice, computerChoice) => {
    const userChoiceElement = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥`;
    userChoiceElement.classList.add('green-glow');
    setTimeout(() => userChoiceElement.classList.remove('green-glow'), 300);
}
const lose = (userChoice, computerChoice) => {
    const userChoiceElement = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost... 🙈`;
    userChoiceElement.classList.add('red-glow');
    setTimeout(() => userChoiceElement.classList.remove('red-glow'), 300);
}
const draw = (userChoice, computerChoice) => {
    const userChoiceElement = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw. 🥂`;
    userChoiceElement.classList.add('grey-glow');
    setTimeout(() => userChoiceElement.classList.remove('grey-glow'), 300);
}

// The state of the game
const game = userChoice => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
    }
}

// Choices event listeners
(() => {
    rock_div.addEventListener('click', () => {
        game("r");
    })

    paper_div.addEventListener('click', () => {
        game("p");
    })

    scissors_div.addEventListener('click', () => {
        game("s");
    })
})();