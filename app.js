function playRound(playerSelection,computerSelection)
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
    let text1= window.prompt("Please enter your choice: ")
    playerSelection = text1.toLowerCase();
    computerSelection = computerPlay();
    console.log("here is the player's choice: " + playerSelection + "  ,and here is the computer's choice: " + computerSelection);
    let displayvalueforPlayer;
    if (playerSelection== "rock" && computerSelection=="scissors")
        {
            displayvalueforPlayer="True";
            console.log("you win,rock beats scissors");
        }
    else if (playerSelection== "rock" && computerSelection=="paper")
        {
            console.log("you loose,paper beats rock");
        }
    else if (playerSelection== "scissors" && computerSelection=="rock")
        {
            console.log("you loose,rock beats scissors");
        }
    else if (playerSelection== "scissors" && computerSelection=="paper")
            {
                console.log("you win,scissors beats papers");
                displayvalueforPlayer="True";
            }
    else if (playerSelection== "paper" && computerSelection=="rock")
            {
                console.log("you win,paper beats rock");
                displayvalueforPlayer="True";
            }
    else if (playerSelection== "paper" && computerSelection=="scissors")
            {
                console.log("you loose,scissors beats paper");
            }
    else {
        console.log("no result, they are equal");
    }
    
}

function game() { 
    let countP=0;
    let countC=0; 
    for (let i=0; i<5; i++)
        {
            playRound();
            if(displayvalueforPlayer="True")
                {
                    countP = countP++;
                }
            else {
                    countC = countC++;
            }
}
            if(countP>countC)
                {
                    console.log("Winner is Player");
                }
            else {
                console.log("Winner is Computer");
            }
}
game();
