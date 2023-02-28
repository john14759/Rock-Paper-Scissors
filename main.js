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

    return computerGuess;
}

function oneRound(playerSelection){
    let log="";
    let computerGuess = getComputerChoice();

        if((playerSelection == 'paper' && computerGuess == 'rock')||
        (playerSelection == 'rock' && computerGuess == 'scissors')||
        (playerSelection == 'scissors' && computerGuess == 'paper')){

            playerScore +=1;

        log = ('You win, ' + playerSelection + ' beats ' + computerGuess + 
                    '. Player Score: ' + playerScore + ' Computer Score: ' + computerScore);

            if (playerScore ==5){
                    log = ('You win!');
                    playerScore=0;
                    computerScore=0;
            }     
        }

        else if (playerSelection == computerGuess){
            log = ('It is a tie. You both chose ' + playerSelection +
            '. Player Score: ' + playerScore + ' Computer Score: ' + computerScore);
        }

        else {
            computerScore +=1;

            log = ('You lose, ' + computerGuess + ' beats ' + playerSelection + 
                    '. Player Score: ' + playerScore + ' Computer Score: ' + computerScore);

            if (computerScore ==5){
                    log = ('You lose!');
                    playerScore=0;
                    computerScore=0;
            }     

        }

        document.getElementsByClassName('results').innerHTML = log;
        return;
    }


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        oneRound(button.value);
    })
})


