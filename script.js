// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {

  // Write password to the #password input
  var symbolChar = ["!", "@", "#", "$", "^", "&", "*", "+", "-", "_", "?", "<", ">", "?"]
  var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var finalPassword = "";

  var wantPass = confirm("Would you like to generate a random password?");
  if (!wantPass) {
    return;
  }

  var passChar = prompt("How many characters would you like your password?");
  for (passChar === false; passChar < 8 || passChar > 128; passChar++) {
    // if (passChar < 8 || passChar > 128) {
    alert("Needs between 8-128 characters");
    var passChar = prompt("How many characters would you like your password?");
  }


  passSymbolChar = confirm("Click OK to confirm including specialized characters.");
  passLowerChar = confirm("Click OK to confirm including lowercase characters.");
  passUpperChar = confirm("Click OK to confirm including uppercase characters.");
  passNumberChar = confirm("Click OK to confirm including number characters.");

  var Char = [passSymbolChar, passLowerChar, passUpperChar, passNumberChar]
  for (Char === false; !passSymbolChar && !passLowerChar && !passUpperChar && !passNumberChar; Char++) {
    alert("At least one type of characteristic should be choosen")
    passSymbolChar = confirm("Click OK to confirm including specialized characters.");
    passLowerChar = confirm("Click OK to confirm including lowercase characters.");
    passUpperChar = confirm("Click OK to confirm including uppercase characters.");
    passNumberChar = confirm("Click OK to confirm including number characters.");
  }

  for (let i = 0; i < passChar; i++) {
    // generate overall list of potential chars
    let randomPW = [];
    if (passSymbolChar) {
      randomPW = randomPW.concat(symbolChar);
    }
    if (passLowerChar) {
      randomPW = randomPW.concat(lowerChar);
    }
    if (passUpperChar) {
      randomPW = randomPW.concat(upperChar);
    }
    if (passNumberChar) {
      randomPW = randomPW.concat(numberChar);
    }
    console.log(randomPW)
    // randomly select a char
    let c = Math.floor(Math.random() * randomPW.length)
    // append that char to final pw
    finalPassword += randomPW[c]
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

 

 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
