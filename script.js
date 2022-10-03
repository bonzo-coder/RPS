        let userWeaponType="";
        let choose = ["Paper", "Rock", "Scissors"];
        let computerChoice;
        let newText;
        let gameMessage="";
        let userPoints=0;
        let compPoints=0;
        let i=0;

        function getComputerChoice() { 
            computerChoice = choose[Math.floor(Math.random() * choose.length)];
            console.log(computerChoice);
            return computerChoice;
            }

        function userChoice () {
            userWeaponType = document.getElementById("inputBlock").value;
            newText = (userWeaponType.toUpperCase()).slice(0,1) + (userWeaponType.toLowerCase()).slice(1,10);
            console.log(newText);
            return newText;
            }        

        function message(text) {
            document.getElementById("gameMessage").innerHTML=text;
            }
            
        function clean () {
            document.getElementById("inputBlock").value="";
            }
        
        function clickButton () {
            document.getElementById("inputBlock").value="Type your choice here";
            document.getElementById("playButton").addEventListener("click", playRound);
            }
           
        function playRound () {
            getComputerChoice();
            userChoice();
            if (computerChoice=="Paper") {
                if (newText=="Paper"){message("DRAW"); i=i-1;}
                else if (newText=="Scissors") {message("You Win! Scissors beats Paper");userPoints=userPoints+1;}
                else if (newText=="Rock"){message("You Lose! Paper beats Rock");compPoints=compPoints+1;}
                else { message("Start again. Follow instructions");i=i-1;}}
            else if (computerChoice=="Scissors") {
                if (newText=="Paper"){message("You Lose! Scissors beats Paper");compPoints=compPoints+1;}
                else if (newText=="Scissors") {message("DRAW"); i=i-1;}
                else if (newText=="Rock"){message("You Win! Rock beats Scissors");userPoints=userPoints+1;}
                else { message("Start again. Follow instructions");i=i-1;}}
            else   {
                if (newText=="Paper"){message("You Win! Paper beats Rock");userPoints=userPoints+1;}
                else if (newText=="Scissors") {message("You Lose! Rock beats Scissors");compPoints=compPoints+1;}
                else if (newText=="Rock"){message("DRAW"); i=i-1;}
                else { message("Start again. Follow instructions");i=i-1;}
            }
            clean ();
            game();
        }
        
        
        function game() {
            i = i + 1;
            if (i<6) {
            clickButton();
            }
            else {
                document.getElementById("inputBlock").style.visibility="hidden";
                document.getElementById("playButton").style.visibility="hidden";
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
            console.log(userPoints);
            console.log(compPoints);
            document.getElementById("gameScore").value="Current game state after" + i +"games";
            document.getElementById("gameScore").value="Current game state after" + i +"games";
            gameScore.textContent="Current game state after " + (i-1) +" games";
            userScore.textContent="Player: "+userPoints +"    Computer "+compPoints;
        }

          
        game();