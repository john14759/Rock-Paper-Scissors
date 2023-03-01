let playerScore =0;
let computerScore =0;

const buttons = document.querySelectorAll('button');

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);

    switch(choice){
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;
        
        case 2:
            return "scissors";
            break;
    }

}

function oneRound(playerSelection){
    let log="";
    let scorecomputer = "";
    let scoreplayer = "";
    let computerGuess = getComputerChoice();

        if((playerSelection == 'paper' && computerGuess == 'rock')||
        (playerSelection == 'rock' && computerGuess == 'scissors')||
        (playerSelection == 'scissors' && computerGuess == 'paper')){

            playerScore +=1;

        log = ('Computer selected: ' + computerGuess + '<br>Player selected: ' + playerSelection + '<br><br>You win, ' + playerSelection + ' beats ' + computerGuess);
        scoreplayer = ('Player Score: ' + playerScore);
        scorecomputer = ('Computer Score: ' + computerScore);

            if (playerScore ==5){
                    log = ('You won the game! Congrats!');
                    playerScore=0;
                    computerScore=0;
            }     
        }

        else if (playerSelection == computerGuess){
            log = ('Computer selected: ' + computerGuess + '<br>Player selected: ' + playerSelection +'<br><br>It is a tie. You both chose ' + playerSelection);
            scoreplayer = ('Player Score: ' + playerScore);
            scorecomputer = ('Computer Score: ' + computerScore);
        }

        else {
            computerScore +=1;

            log = ('Computer selected: ' + computerGuess + '<br>Player selected: ' + playerSelection + '<br><br>You lose, ' + computerGuess + ' beats ' + playerSelection);
            scoreplayer = ('Player Score: ' + playerScore);
            scorecomputer = ('Computer Score: ' + computerScore);

            if (computerScore ==5){
                    log = ('You lost the game! Try again!');
                    playerScore=0;
                    computerScore=0;
            }     

        }

        document.getElementById('results').innerHTML = log;
        document.getElementById('computerscore').innerHTML = scorecomputer;
        document.getElementById('playerscore').innerHTML = scoreplayer;
        return;
    }


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        oneRound(button.value);
    })
})


