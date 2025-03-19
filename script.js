
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    return getChoice(number)
};

let computerChoice = null;
function getChoice (number){

    if (number ==1){
        computerChoice = "tijera"
        return computerChoice;
    } else if( number ==2){
        computerChoice = "piedra"
        return computerChoice;
    } else{
        computerChoice = "papel"
        return computerChoice;
    };
};


let option = prompt ('1-Tijera \n 2-Papel \n 3-Piedra');
let humanChoice = null;

function getHumanChoice(option){
    if (option == 1){
        humanChoice = "tijera";
        return humanChoice;
    } else if (option == 2){
        humanChoice = "papel";
        return humanChoice;
    } else {
        humanChoice = "piedra";
        return humanChoice;
    }
};

let humanScore = 0;
let computerScore = 0;

function playRound(){
    getHumanChoice(option);
    getComputerChoice();
    if (humanChoice == "tijera" && computerChoice == "papel"){
        humanScore = humanScore + 1;
        return humanScore;
    } else if (humanChoice == "tijera" && computerChoice == "piedra"){
        computerScore = computerScore + 1;
        return computerScore;
    } else if (humanChoice == "papel" && computerChoice == "tijera"){
        computerScore = computerScore + 1;
        return computerScore;
    } else if (humanChoice == "papel" && computerChoice == "piedra"){
        humanScore = humanScore + 1;
        return humanScore;
    } else if (humanChoice == "piedra" && computerChoice == "papel"){
        computerScore = computerScore + 1;
        return computerScore;
    } else if (humanChoice == "piedra" && computerChoice == "tijera"){
        humanScore = humanScore + 1;
        return humanScore;
    } else {
        return "empate"
    }
};

console.log (playRound())