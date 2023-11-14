console.log("Hello world")


var gameChoices = ["r", "p", "s"];

var wins = 0;
var loses = 0;
var ties = 0;


for (let i = 0; i < 10; i++){
    var userChoice = prompt("What do you want to play? r, p or s?");

    const systemChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];

    if (userChoice === 'r' || userChoice === 'p' || userChoice === 's') {

        alert('The computer chose ' + systemChoice);
        
        if (userChoice == systemChoice){
        ties++;
        }
        else if (userChoice == "r" && systemChoice == "p"){
            loses++;
        }
        else if (userChoice == "p" && systemChoice == "s"){
            loses++;
        }
        else if (userChoice == "s" && systemChoice == "r"){
            loses++;
        }
        else if (userChoice == "r" && systemChoice == "s"){
            wins++;
        }
        else if (userChoice == "p" && systemChoice == "r"){
            wins++;
        }
        else if (userChoice == "s" && systemChoice == "p"){
            wins++;
        }
    }
}

alert('Total wins: ' + wins + '\nTotal ties: ' + ties + '\nTotal losses: ' + loses);
