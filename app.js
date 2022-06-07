function playRound(displayvalueforPlayer,displayvalueforComputer)
{
    function computerPlay () {
        let Array= ["rock","paper","scissors"];
        function rndmInt(min,max)   {
             return Math.floor(Math.random()*(max - min + 1)+min)
            }
        let randomValue = rndmInt(0,2);
        let computerchoice = Array[randomValue];
    return computerchoice;
        }
    let text = prompt("Please enter your choice here: ","rock / scissors / paper");
    if (text != null)
    {
        text = text.toLowerCase();
        while (text.toLowerCase() != "rock" && text.toLowerCase() != "paper" && text.toLowerCase() != "scissors")
                {
                    text = text.toLowerCase();
                    alert("Wrong Entry !!  please try again ");
                    text = prompt("Please enter your choice here: ","rock / scissors / paper");
                }
        text = text.toLowerCase();
        playerSelection = text;
        computerSelection = computerPlay();
        alert( "you've entered: "+ text +" , Computer entered: "+ computerSelection);
        console.log("here is the player's choice: " + playerSelection + "  ,and here is the computer's choice: " + computerSelection);
        displayvalueforPlayer= Boolean();
        displayvalueforComputer= Boolean();

        if (playerSelection == "rock" && computerSelection == "scissors")
            {
                displayvalueforPlayer = true;
                displayvalueforComputer = false;
                console.log("you win,rock beats scissors");
            }
        else if (playerSelection == "rock" && computerSelection =="paper")
            {
                displayvalueforComputer = true;
                displayvalueforPlayer = false;
                console.log("you loose,paper beats rock");
            }
        else if (playerSelection == "scissors" && computerSelection =="rock")
            {
                displayvalueforComputer = true;
                displayvalueforPlayer = false;
                console.log("you loose,rock beats scissors");
            }
        else if (playerSelection == "scissors" && computerSelection == "paper")
                {
                    console.log("you win,scissors beats papers");
                    displayvalueforPlayer = true;
                    displayvalueforComputer = false;
                }
        else if (playerSelection == "paper" && computerSelection == "rock")
                {
                    console.log("you win,paper beats rock");
                    displayvalueforPlayer = true;
                    displayvalueforComputer = false;
                }
        else if (playerSelection == "paper" && computerSelection == "scissors")
                {
                    displayvalueforComputer = true;
                    displayvalueforPlayer = false;
                    console.log("you loose,scissors beats paper");
                }
        else {
            displayvalueforPlayer = false;
            displayvalueforComputer = false;
            console.log("no result, they are equal");
            }       
    }
    else {
        let confirmation= confirm("are you sure you want to cancel ?");
        if (confirmation == true)
        {
            return;
        }
        else{
            playRound();
        }
    }
    let MyArray = [displayvalueforPlayer,displayvalueforComputer];
        return MyArray;
    
}

function game() {
    alert("Let's play the game !!");
    let countP=0;
    let countC=0;
    
    for (let i=0; i<5; i++)
        {
            let gameArray = playRound();
            let Player = gameArray[0];
            let Computer = gameArray[1];
            let round=i + 1;
            if( Player == true && Computer == false)
                {
                    countP = countP + 1 ;
                    console.log("Round Number: "+ round + "\n Player Score is : " + countP + " , Computer Score is : " + countC );
                    alert("Player Won with scores: Player: "+countP+", Computer: "+countC);
                }
            else if ( Computer == true && Player == false )
             {
                    countC = countC + 1 ;
                    console.log("Round Number: "+ round + "\n Player Score is : " + countP + " , Computer Score is : " + countC );
                    alert("Computer Wins with scores : Player: "+ countP +", Computer : "+ countC );
            }
            else
            {
                    countC = countC;
                    countP = countP;
                    console.log("Round Number: "+ round + "\n Player Score is : " + countP + " , Computer Score is : " + countC );
                    alert("No loss for both : Player: "+countP+", Computer: "+countC);
            }

        }
    if (countP > countC)
        {
            console.log("Winner is Player !!");
            alert("Winner is Player !!");
        }
    else if (countP == countC)
        {
            console.log("No Winner, scores are equal");
            alert("No winner, scores are equal !!");
        }
        else {
            console.log("Winner is Computer !!");
            alert("Winner is Computer !!");
        }
}
game();
