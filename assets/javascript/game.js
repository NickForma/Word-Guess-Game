let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let characters = [
    "gandalf the grey",
    "gollum",
    "sauron",
    "gimli",
    "saruman",
    "aragon",
    "legolas",
    "lord elrond",
    "arwen",
    "galadriel",
    "frodo baggins",
    "bilbo baggins",
    "eowyn",
    "sawise gamgee",
    "boromir",
    "peregrin took",
    "theoden",
    "faramir",
    "witch king of angmar",
    "mariadoc brandybuck",
    "isildur",
    "treebeard",]
    


    
var userGuessCount = 0;
var guessesLeft = 10;




document.getElementById("test").innerHTML = "BIG BIG BIG";


document.onkeyup = function(event) {
    let userGuess = event.key;
    console.log(userGuess);
}
































// function getChar() {
//     for (i = 0; i < characters.length; i++) {
        
//             console.log(characters[i]);
//         }
        
//     }

// getChar();




// var char = "gandalf"

// document.onkeyup = function (event) {
//     var userGuess = event.key;
//      userGuessCount = ++;
    
//     if (userGuess.indexOf(char) > -1) {
//         document.getElementById("letter-placeholder").replaceWith(userGuess);
//     }
//     else {
//         guessesLeft --;
//         console.log(userGuess);
//     }
// }

// document.getElementById("test").innerHTML = "Hello there sir";