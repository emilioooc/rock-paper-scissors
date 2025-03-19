
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    return getChoice(number)
};

function getChoice (number){
    let computerChoice = null;
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

function getHumanChoice(option){
    let humanChoice = null;
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

console.log(getHumanChoice(option));
console.log(getComputerChoice());