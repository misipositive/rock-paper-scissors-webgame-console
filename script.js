    function getComputerChoice() {
        const rps = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * 3)
        return rps[random]
    };
    
    let compScore = 0;
    let userScore = 0;
    
    
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            userScore++
            return "Rock beats scissors"
        } else if (playerSelection === "paper" && computerSelection === "rock"){
            userScore++
            return "Paper beats rock" 
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            userScore++
            return "Scissors beats paper" 
        } else if (computerSelection === "rock" && playerSelection === "scissors") {
            compScore++
            return "Rock beats scissors"
        } else if (computerSelection === "paper" && playerSelection === "rock"){
            compScore++
            return "Paper beats rock" 
        } else if (computerSelection === "scissors" && playerSelection === "paper") {
            return "Scissors beats paper" 
        } else if (computerSelection === "rock" && playerSelection === "rock") {
            return "Rock"
        } else if (computerSelection === "paper" && playerSelection === "paper"){
            return "paper on paper" 
        } else (computerSelection === "scissors" && playerSelection === "scissors")
            return "Sicssors scissors"  
        
    
}
    
    function game() {
        
        for (let i = 0; i < 5; i++) {
        let input = prompt("Open console to keep up with the score!","Rock, paper or scissors").toLowerCase()
        const computerSelection = getComputerChoice();
        console.log(playRound(input, computerSelection))
        console.log(userScore)
        console.log(compScore)    

    } 
   
    if (compScore < userScore) {
        return alert("Congratulations, now go agane!");
    } else if (compScore > userScore) {
        return alert("You lost buddy!");
    } else if (compScore === userScore) 
        return alert("Thats a tie")


}

game();