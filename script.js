let round = parseInt(prompt("Pick the number of rounds."));

playGame(round);
// Functions
function playGame(round) {
    let humanScore = 0, computerScore = 0

    for (let i = 0; i < round; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(humanSelection);
        console.log(computerSelection);

        const score = playRound(humanSelection, computerSelection)
        console.log(score);

        if (score === "Winner") {
            humanScore++;
        } else if (score === "Loser") {
            computerScore++;
        }
        
        console.log("Your Score: " + String(humanScore) + " VS Computer Score: " + String(computerScore))
        
    }
}

function playRound(humanChoice, computerChoice) {

    let score;
    if (humanChoice === computerChoice) {
        score = "Tie";
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")){
        score = "Winner";
    } else {
        score = "Loser";
    }
    return score;
}

function getHumanChoice() {
    let answer = prompt("Please enter 1 of the below letters: \nr = rock\np = paper\ns = scissors");
    let answerWord;
    if (answer.toLowerCase() === "r") {
        answerWord = "Rock";
    } else if (answer.toLowerCase() === "p") {
        answerWord = "Paper";
    } else if (answer.toLowerCase() === "s") {
        answerWord = "Scissors";
    }
    return answerWord;
}

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    let word;
    if (num === 1) {
        word = "Rock";
    } else if (num === 2) {
        word = "Paper";
    } else {
        word = "Scissors";
    }
    return word
}