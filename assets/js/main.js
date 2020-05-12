var userChoice = prompt('Please choose one from rock, paper or scissors, and type into the box below');
var choice = ['paper', 'rock', 'scissors'];
var randomNum = Math.floor(Math.random() * 3);
var computerChoice = choice[randomNum];

console.log(`User choice: ${userChoice}
Computer choice: ${computerChoice}.`);

function play() {
    if (userChoice === computerChoice){
    console.log('Tie!');
    }
    else if (userChoice === 'paper' && computerChoice === 'rock'){
    console.log('You win!');
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors'){
    console.log('You win!');
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock'){
    console.log('You lose!');
    }
    else if (userChoice === 'rock' && computerChoice === 'paper'){
    console.log('You lose!');
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors'){
    console.log('You lose!');
    }
    else if (userChoice === 'scissors' || computerChoice === 'paper'){
    console.log('You win!');
    }
    else{
    console.log('Invalid input, please try again');
    }
}

play();

var newGame = alert('For new game click Refresh Game');
var button = document.querySelector('.refresh');
document.addEventListener('click', refreshPage);
function refreshPage(){
   window.location.reload();
};

console.log('For new game click Refresh Game');

