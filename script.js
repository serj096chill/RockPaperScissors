console.log(getComputerChoice());


// Functions
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