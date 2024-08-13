const wrongLabel = document.getElementById("wrongLabel");
const areaNumber = document.getElementById("areaNumber");
const resultLabel = document.getElementById("resultLabel");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

let resultNumber = Math.floor(Math.random()* 98) + 2;
let minRange = 1;
let maxRange = 100;
let guessNumber;

submit.onclick = function () {
    guessNumber = document.getElementById("guessNumber").value;
    guessNumber = Number(guessNumber);        
    document.getElementById("guessNumber").min = minRange;
    document.getElementById("guessNumber").max = maxRange;
    
    if (guessNumber < minRange || guessNumber > maxRange || guessNumber == 1 || guessNumber == 100) {
        wrongLabel.textContent = `The number you entered is invalid! Please re-enter a number between 2 and 99.`
    } else {
        if (guessNumber === resultNumber) {
            document.getElementById("resultNumber").textContent = `${resultNumber}`;
            minRange = guessNumber
            maxRange = guessNumber
            resultLabel.textContent = `You Lose!!! You Lose!!!`;
            wrongLabel.textContent = ``;
        } else if (guessNumber > resultNumber) {
            maxRange = guessNumber;
            areaNumber.textContent = `Range: ${minRange} - ${maxRange}`;
            wrongLabel.textContent = ``;
        } else {
            minRange = guessNumber;
            areaNumber.textContent = `Range: ${minRange} - ${maxRange}`;
            wrongLabel.textContent = ``;
        }
    }
}

//Reset the game
reset.onclick = function () {
    resultNumber = Math.floor(Math.random()* 98) + 2;
    minRange = 1;
    maxRange = 100;
    document.getElementById("resultNumber").textContent = ``
    resultLabel.textContent = ``
    wrongLabel.textContent = ``;
    areaNumber.textContent = `Range: ${minRange} - ${maxRange}`;
}



