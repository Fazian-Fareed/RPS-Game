// To Track the Score
let userScore = 0;
let compScore = 0;

// to select the score class from html file
const user_Score = document.querySelector("#userScore");
const comp_Score = document.querySelector("#compScore");

// to select the btn id from html file
let result = document.querySelector("#btn");

// to select all buttons 
const selectOpts = document.querySelectorAll(".selectOpt");

// To Generate computer choice
const genCompChoi = () => {
    // we have options
    const opts = ["Rock", "Paper", "Scissor"];

    // to generate random number 
    // Math.random() will generate random number between 0-1
    //Math.floor() convert these numbers into whole numbers

    let ranNum = Math.floor(Math.random() * 3);
    // just to check index number and value at that index
    // console.log(ranNum);
    // console.log(opts[ranNum]);

    return opts[ranNum]; // this is computer choice

}

// To Play Game
const Game = (userChoice) => {
    console.log("User choice :", userChoice);
    // here we get the user choice, Now we need computer choice
    const compChoice = genCompChoi();
    console.log("computer choice:  ", compChoice);

    // To check the condition

    // if the game w'ld be draw 
    if (userChoice === compChoice) {
        //  console.log("Game Draw"); 
        result.innerText = 'Game Draw. Try Again';
        result.style.backgroundColor = '#1757cf';
    }

    // else
    else {
        let userWin = true;

        if (userChoice === 'Rock') {
            if (compChoice === 'Paper') {
                userWin = false;
                result.innerText = `You Loss! ${compChoice} beats ${userChoice}`;
                result.style.backgroundColor = 'red';
                compScore++;
                comp_Score.innerText = compScore;

            }
            else {
                userWin = true;
                result.innerText = `You Win! ${userChoice} beats Scissors`; // print message on the screen(win, loss or Draw)
                result.style.backgroundColor = 'Green'; // change background color
                userScore++;    // increment in user score
                user_Score.innerText = userScore; // to print user score on screen

            }
        }
        else if (userChoice === 'Scissors') {
            if (compChoice === 'Paper') {
                userWin = true;
                result.innerText = `You Win! ${userChoice} beats ${compChoice}`;
                result.style.backgroundColor = 'Green';
                userScore++;
                user_Score.innerText = userScore;
            }
            else {
                userWin = false;
                result.innerText = `You Loss! Rock beats ${userChoice}`;
                result.style.backgroundColor = 'red';
                compScore++;
                comp_Score.innerText = compScore;
            }
        }
        else if (userChoice === 'Paper') {
            if (compChoice === "Rock") {
                userWin = true;
                result.innerText = `You Win! ${userChoice} beats ${compChoice}`;
                result.style.backgroundColor = 'Green';
                userScore++;
                user_Score.innerText = userScore;
            }
            else {
                userWin = false;
                result.innerText = `You Loss! Scissors beats ${userChoice}`;
                result.style.backgroundColor = 'red';
                compScore++;
                comp_Score.innerText = compScore;
            }
        }
        // console.log(userWin);
        // console.log(userScore);
        // console.log(compScore);
    }
}

// to access each button individually
selectOpts.forEach((selectOpt) => {
    // console.log(selectOpt);
    selectOpt.addEventListener("click", () => {
        let userChoice = selectOpt.getAttribute("id");
        Game(userChoice);
    })
})

