function getComputerChoice(){
        let a = Math.floor(Math.random() * 31);
        if(a <= 10){
            return "Rock"
    } else if(a <= 20){
            return "Paper"
    } else{
            return "Scissor"
    }
}

let pl;
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    pl = "Rock";
    console.log(playRound());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
        pl = "Paper";
        console.log(playRound());
});

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
        pl = "Scissor";
        console.log(playRound());
});


function play(c, p){
        if(c === "Rock" && p === "Scissor"){
            console.log("You loose! Rock beats Scissor");
            return -1;
    }else if(c === "Scissor" && p === "Rock"){
            console.log("You won! Rock beats Scissors");
            return 1;
    }else if(c === "Rock" && p === "Paper"){
            console.log("You won! Paper beats Rock");
            return 1;
    }else if(c === "Paper" && p ==="Rock"){
            console.log("You loose! Paper beats Rock");
            return -1;
    } else if(c === "Paper" && p === "Scissor"){
            console.log("You won! Scissor beats Rock");
            return 1;
    }else if(c ==="Scissor" && p ==="Paper"){
            console.log("You loose! Scissor bears Rock");
            return -1;
    }else{
            console.log("draw");
            return 0;
    }
}
let res1 = 0;
let res2 = 0;

const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#comp-score');
const result = document.querySelector('#result');

function playRound(){
        let co = getComputerChoice();
        a = play(co, pl);

        
        if(a > 0){
                res1 += 1;
                result.textContent = "You Won";
        }
        if(a < 0){
                res2 += 1;
                result.textContent = "You Lost";
        }
        if(a == 0){
                res1 += 0;
                res2 += 0;
                result.textContent = "It's a tie";
        }
        playerScore.textContent = "Player Score = "+res1;
        compScore.textContent = "Computer Score= "+res2;
        
        if (res1 == 5){
                res1 = 0 ,res2 = 0;
                result.textContent = "Player Won";
                return tryAgain();
        }
        else if (res2 == 5){
                res1 = 0 ,res2 = 0;
                result.textContent = "Computer Won";
                return tryAgain();
        }

        function tryAgain(){
                const tryBtn = document.querySelector('#try-again');
                let btn = document.createElement("button");
                btn.textContent = "Try Again?";
                tryBtn.appendChild(btn);
                btn.addEventListener('click', () => {
                        playerScore.textContent = "Player Score = 0";
                        compScore.textContent = "Computer Score = 0";
                        result.textContent = "";
                        btn.remove();
                })
        }

}

