const rules = document.querySelector('.rulesBtn');
rules.addEventListener('click', () => {
    let mainScreen = document.querySelector('.mainscreen');
    mainScreen.style.visibility = 'hidden';
    setTimeout(() => {
        let rulesPage = document.querySelector('.rulesPage');
        rulesPage.style.visibility = 'visible';
    }, 500);
})

const back = document.querySelector('.backbtn');
back.addEventListener('click', () => {
    let rulesPage = document.querySelector('.rulesPage');
    rulesPage.style.visibility = 'hidden';
    setTimeout(() => {
        let mainScreen = document.querySelector('.mainscreen');
        mainScreen.style.visibility = 'visible';
    }, 500);
})

const secondback = document.querySelector('.secondbackbtn');
secondback.addEventListener('click', () => {
    let gamepage = document.querySelector('.gamepage');
    gamepage.style.visibility = 'hidden';
    setTimeout(() => {
        let mainScreen = document.querySelector('.mainscreen');
        mainScreen.style.visibility = 'visible';
    }, 500);
})

const play = document.querySelector('.startBtn');
play.addEventListener('click', () => {
    let mainScreen = document.querySelector('.mainscreen');
    mainScreen.style.visibility = 'hidden';
    setTimeout(() => {
        let gamepage = document.querySelector('.gamepage');
        gamepage.style.visibility = 'visible';
    }, 500);
})

let pScore = 0;
let cScore = 0;

const playMatch = () => {
    const options = document.querySelectorAll('.optionBtn');
    //computer options
    const computerOptions = ['rock','paper','scissors','lizard','spock'];
    options.forEach(option => {
        option.addEventListener('click', function() {
            const computerNumber = Math.floor(Math.random() * 5);
            const computerChoice = computerOptions[computerNumber];

            compairing(this.id, computerChoice);

            imageChange(this.id, computerChoice);
        })
    })

}

function updateScore() {
    const playerScore = document.querySelector('.playerScore');
    const computerScore = document.querySelector('.computerScore');
    playerScore.innerHTML = "Player: " + pScore;
    computerScore.innerHTML = "Computer: " + cScore;
}

const compairing = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.instructions h1');
    if (playerChoice === computerChoice) {
        winner.innerHTML = "It's a Tie";
        return;
    }    
    if(playerChoice === "scissors"){
        if (computerChoice === "paper" || computerChoice === "lizard") {
            winner.innerHTML = "You Win";
            pScore++;
            updateScore();
        }
        else{
            winner.innerHTML = "You Loss";
            cScore++;
            updateScore();
        }
    }   
    if(playerChoice === "paper"){
        if (computerChoice === "rock" || computerChoice === "spock") {
            winner.innerHTML = "You Win";
            pScore++;
            updateScore();
        }
        else{
            winner.innerHTML = "You Loss";
            cScore++;
            updateScore();
        }
    }  
    if(playerChoice === "rock"){
        if (computerChoice === "lizard" || computerChoice === "scissors") {
            winner.innerHTML = "You Win";
            pScore++;
            updateScore();
        }
        else{
            winner.innerHTML = "You Loss";
            cScore++;
            updateScore();
        }
    }   
    if(playerChoice === "lizard"){
        if (computerChoice === "paper" || computerChoice === "spock") {
            winner.innerHTML = "You Win";
            pScore++;
            updateScore();
        }
        else{
            winner.innerHTML = "You Loss";
            cScore++;
            updateScore();
        }
    } 
    if(playerChoice === "spock"){
        if (computerChoice === "scissors" || computerChoice === "rock") {
            winner.innerHTML = "You Win";
            pScore++;
            updateScore();
        }
        else{
            winner.innerHTML = "You Loss";
            cScore++;
            updateScore();
        }
    }   
}

const imageChange = (playerChoice, computerChoice) => {
    const playerBox = document.querySelector('.playerBox');
    const computerBox = document.querySelector('.computerBox');
    //changing image
    computerBox.style.background = `url(${computerChoice}.png)`
    playerBox.style.background = `url(${playerChoice}.png)`;
    //changing image properties
    computerBox.style.backgroundRepeat = "no-repeat";
    computerBox.style.backgroundPosition = "center";
    computerBox.style.backgroundSize = "60%";
    playerBox.style.backgroundRepeat = "no-repeat";
    playerBox.style.backgroundPosition = "center";
    playerBox.style.backgroundSize = "60%";
    //changing image rotation
    if (playerChoice === "paper" || playerChoice === "lizard" || playerChoice === "spock") {
        playerBox.style.transform = "rotateY(0deg)";
    }
    else{
        playerBox.style.transform = "rotateY(180deg)";
    }
    if(computerChoice === "paper" || computerChoice === "lizard" || computerChoice === "spock"){
        computerBox.style.transform = "rotateY(180deg)";
    }
    else{
        computerBox.style.transform = "rotateY(0deg)";
    }
}

playMatch();
