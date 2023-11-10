let numberToGuess = Math.floor(Math.random() * (100 - 1)) + 1
let response = document.getElementById("response")

console.log(`The number to guess is ${numberToGuess}`)

function reloadPage(){
    location.reload()
}
//  let playAgain = document.getElementById("play_again").style.display = "none"

// Game Loop
function startGame(){
    let userNumber = document.getElementById("number").value

    console.log(`The user number is ${userNumber}`)

    if(userNumber > 100){
         response.innerHTML = ("Please choose a number below 100")
    }else if(userNumber < 1){
        response.innerHTML = ("Please choose a number higher than 1")
    }else if(userNumber > numberToGuess){
        response.innerHTML =  ("Your number is too high!")
   }else if(userNumber < numberToGuess){
        response.innerHTML = ("Your number is too low!")
   }else{
        response.innerHTML = (`That's correct! The number was ${numberToGuess}.`),
        document.getElementById("play_again").style.display = "inline"
     //    document.getElementById("play_again").innerHTML = ' >'
   }

}
