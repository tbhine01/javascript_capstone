// Default hangman Image
let hangmanImage = document.getElementById("hangman_image").src = "assets/hangman_start.jpg"

// Lives
let lives = 6

// Hangman words
let hangmanWords = ["godzilla", "toothless", "batman", "fireplace", "avatar"]

// Getting a random word
let wordToGuess = hangmanWords[Math.floor(Math.random() * hangmanWords.length)]

// Alphabet
let html = '';
let letters;
for (var i = 97; 122 >= i; i++) {// A-65, Z-90
  letters = String.fromCharCode(i);
  html += '<button onclick="setLetter(\'' + letters + '\');">' + letters + '</button>';
}
let box = document.getElementById('box').innerHTML = html;

// Disable buttons when clicked

// Checking the length of the hangman words
for(i = 0; i < hangmanWords.length; i++){
    console.log(`${hangmanWords[i]} - ${hangmanWords[i].length}`)
}

console.log(`The word to guess is: ${wordToGuess}`)

// Getting the word lines to print on the webpage
let guessLetter = []

for(let i = 0; i < wordToGuess.length; i++){
    guessLetter[i] = "_"
}

document.getElementById("word_lines").innerHTML = guessLetter.join(" ")

// Game Loop
function setLetter(letter){
    let letterFound = false
    for(let i = 0; i < wordToGuess.length; i++){
        // console.log(letter)
        // console.log(wordToGuess[i])
        if(wordToGuess[i] === letter){
            guessLetter[i] = letter 
            letterFound = true     
        }
    }
    if(letterFound){
        document.getElementById("word_lines").innerHTML = guessLetter.join(" ")
    }else{
        lives-- 
        document.getElementById("hangman_lives").innerHTML = `You have ${lives} lives left`
    }
    if(lives == 5){
        document.getElementById("hangman_image").src = "assets/hangman_1.jpg"
    }else if(lives == 4){
        document.getElementById("hangman_image").src = "assets/hangman_2.jpg"
    }else if(lives == 3){
        document.getElementById("hangman_image").src = "assets/hangman_3.jpg"
    }else if(lives == 2){
        document.getElementById("hangman_image").src = "assets/hangman_4.jpg"
    }else if(lives == 1){
        document.getElementById("hangman_image").src = "assets/hangman_5.jpg"
    }else if(lives === 0){
        document.getElementById("hangman_image").src = "assets/hangman_6.jpg",
        alert("Game Over") //add a reload game here
    }
}

