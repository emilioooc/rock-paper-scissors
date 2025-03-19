
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

console.log(getComputerChoice());
