
    // Setting up variables
let choiceArray = ["Rock", "Paper", "Scissors"];

let outcome = document.getElementById("outcome")

const choice = document.getElementsByName("choices")
let userChoice

function playGame(){


    let computerChoice = choiceArray[Math.floor(Math.random()* choiceArray.length)]
    // Chcecking choice
    for(let i = 0; i < choice.length; i++){
        if(choice[i].checked === true){
            userChoice = choice[i].value
        }
    }
    
    console.log(`The user chose ${userChoice}. The Computer chose ${computerChoice}`)

    // Condtional 
    if(userChoice === computerChoice){
        outcome.innerText = "It's a Tie!"
        // alert("It's a tie")
    }else if(userChoice == "Rock" && computerChoice == "Paper"){
        outcome.innerText = "The Computer chose Paper. Computer Wins"
        // alert("Computer Wins"), computerWins
    }else if(userChoice == "Rock" && computerChoice == "Scissors"){
        outcome.innerText = "The Computer chose Scissors! You Win!"
        // alert("Congrats, you won!"), userWins
    }else if(userChoice == "Paper" && computerChoice == "Rock"){
        outcome.innerText = "The Computer chose Rock. You win!"
        // alert("Congrats, you won!"), userWins
    }else if(userChoice ==  "Paper" && computerChoice == "Scissors"){
        outcome.innerText = "The Computer chose Scissors. Computer Wins"
        // alert("Computer Wins"), computerWins
    }else if(userChoice == "Scissors" && computerChoice == "Rock"){
        outcome.innerText = "The Computer chose Rock. Computer Wins"
        // alert("Computer Wins"), computerWins
    }else if(userChoice == "Scissors" && computerChoice == "Paper"){
        outcome.innerText = "The Computer chose Paper. You Win!"
        // alert("Congrats, you won!"), userWins
    }else{
        alert("Invalid Option")
    }

    



}