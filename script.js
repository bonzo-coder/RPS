        let btnRock='';
        let btnPaper='';
        let btnScissors='';
        let computerChoice;
        let newText;
        let gameMessage="";
        let userPoints=0;
        let compPoints=0;
        let i=0;
        const arr = ['Rock','Paper','Scissors'];
        let button;
        let j=0;
        let elementHighlighted;

        function getComputerChoice() { 
            computerChoice = arr[Math.floor(Math.random() * arr.length)];
            console.log(computerChoice);
            return computerChoice;
            }
            
        function userChoice () {
            document.getElementById("bRock").addEventListener('click', function() {
                elementHighlighted = document.getElementById("bRock");
                elementHighlighted.classList.add("playing");
                newText= btnRock;
                return newText;
            });
            document.getElementById("bPaper").addEventListener('click', function() {
                elementHighlighted = document.getElementById("bPaper");
                elementHighlighted.classList.add("playing");
                newText= btnPaper;
                return newText;
            });
            document.getElementById("bScissors").addEventListener('click', function() {
                elementHighlighted = document.getElementById("bScissors");
                elementHighlighted.classList.add("playing");
                newText= btnScissors;
                return newText;
            });
        }

        function buttonOff () {
            document.querySelector('#bRock').disabled = true;
            document.querySelector('#bPaper').disabled = true;
            document.querySelector('#bScissors').disabled = true;
        }

        function buttonOn () {
            document.querySelector('#bRock').disabled = false;
            document.querySelector('#bPaper').disabled = false;
            document.querySelector('#bScissors').disabled = false;

        }

        function clickButton () {
            document.getElementById("playButton").addEventListener("click", gameStart);
            }
           
        function gameStart () {
            document.getElementById('playButton').remove('button');
            let div = document.createElement('div');
            div.id="choiceButton";
            for (j; j<arr.length;j++){
                button = document.createElement('button');
                button.type='button';
                button.id="b"+arr[j];
                button.textContent = arr[j];
                button.classList.add('key');
                document.getElementById('btnBox').appendChild(div);
                document.getElementById('choiceButton').appendChild(button);
            }
            btnRock = document.getElementById("bRock").value="Rock";
            btnPaper = document.getElementById("bPaper").value="Paper";
            btnScissors = document.getElementById("bScissors").value="Scissors";
            userChoice();
            document.getElementById("choiceButton").addEventListener('click', playRound);       
        }  

        function removeTransition(e) {
            if (e.propertyName !== 'transform') return;
            e.target.classList.remove('playing');
        }     
            
        function message(text) {
            document.getElementById("gameMessage").innerHTML=text;
        }

        function endTransition() {
            const keys = Array.from(document.querySelectorAll('.key'));
            keys.forEach(key => key.addEventListener('transitionend', removeTransition));
        }

        function playRound () {
            userChoice();
            buttonOff();
            endTransition();
            getComputerChoice();
            if (computerChoice=="Paper") {
                if (newText=="Paper"){message("DRAW"); i=i;}
                else if (newText=="Scissors") {message("You Win! Scissors beats Paper");userPoints=userPoints+1;}
                else if (newText=="Rock"){message("You Lose! Paper beats Rock");compPoints=compPoints+1;}
                else { message("Start again. Follow instructions");i=i-1;}}
            else if (computerChoice=="Scissors") {
                if (newText=="Paper"){message("You Lose! Scissors beats Paper");compPoints=compPoints+1;}
                else if (newText=="Scissors") {message("DRAW"); i=i;}
                else if (newText=="Rock"){message("You Win! Rock beats Scissors");userPoints=userPoints+1;}
                else { message("Start again. Follow instructions");i=i-1;}}
            else   {
                if (newText=="Paper"){message("You Win! Paper beats Rock");userPoints=userPoints+1;}
                else if (newText=="Scissors") {message("You Lose! Rock beats Scissors");compPoints=compPoints+1;}
                else if (newText=="Rock"){message("DRAW"); i=i;}
                else { message("Start again. Follow instructions");i=i-1;}
            }
            newText='';
            if (compPoints==5 || userPoints==5){
            }
            else {
                buttonOn();
            }
            scoreOfGame();
            return i;
        }
        
        function scoreOfGame() {
            i=i+1;
            if (compPoints <5 && userPoints<5) {

            }
            else {
                document.getElementById("choiceButton").style.visibility="hidden";
                
                if (userPoints>compPoints){
                finalScore.textContent="YOU WON that GAME"; 
                }
                else  if (userPoints<compPoints) {
                finalScore.textContent="YOU LOST that GAME";
                }
                else {
                finalScore.textContent="DRAW in that GAME";
                }
                document.getElementById("resetButton").style.display="block";
            }
            
            document.getElementById("gameScore").value="Current game state after" + i +"games";
            document.getElementById("gameScore").value="Current game state after" + i +"games";
            gameScore.textContent="Current game state after " + (i) +" games";
            userScore.textContent="Player: "+userPoints +"    Computer "+compPoints;
        }

          
        clickButton();