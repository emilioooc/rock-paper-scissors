
function playGame(){
    let computerScore = 0;
    let humanScore = 0;
    let empates = 0;

    let resultados = playRound(computerScore, humanScore, empates);
    
    computerScore = resultados.cScore;
    humanScore = resultados.hScore;
    empates = resultados.empate;

    console.log("Computer Score Global: ", computerScore);
    console.log("Human Score Global; ", humanScore);
    console.log("Empates Totales: ", empates);

    if (computerScore > humanScore){
        console.log("Ganador PC")
    }else if ( computerScore < humanScore){
        console.log("Ganador Human")
    } else {console.log("Empate")}
}

function playRound (cScore, hScore, empate){
    for (let i = 0 ; i < 5 ; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (humanChoice == "tijera" && computerChoice == "papel"){
            hScore = hScore +1;
        } else if (humanChoice == "tijera" && computerChoice == "piedra"){
            cScore = cScore +1;
        } else if (humanChoice == "papel" && computerChoice == "piedra"){
            hScore = hScore +1;
        }else if (humanChoice == "papel" && computerChoice == "tijera"){
            cScore = cScore +1;
        }else if (humanChoice == "piedra" && computerChoice == "tijera"){
            hScore = hScore +1;
        }else if (humanChoice == "piedra" && computerChoice == "papel"){
            cScore = cScore +1;
        }else {empate = empate +1}

        console.log("Ronda: ", i+1);
        console.log("Human eleccion: ", humanChoice);
        console.log("PC eleccion: ", computerChoice);
        console.log("Homan Score Round: ",hScore);
        console.log("Computer Score Round: ", cScore);
        console.log("Empates: ", empate)
    }
    return { cScore, hScore, empate };
}

function getHumanChoice (){
    let option = prompt ("1-Tijera \n 2-Papel \n 3-Piedra");
    if (option == 1){
        option = "tijera"
    }else if (option == 2){
        option = "papel"
    }else {option = "piedra"}
    return option;
}

function getComputerChoice(){
    let option = Math.floor(Math.random() * 3);
    if (option == 1){
        option = "tijera"
    }else if (option == 2){
        option = "papel"
    }else {option = "piedra"}
    return option;
}

console.log(playGame());