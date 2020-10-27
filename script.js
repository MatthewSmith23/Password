// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var symbolChar = ["!", "@", "#", "$", "^", "&", "*", "+", "-", "_", "?", "<", ">", "?"]
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var finalPassword = " ";
var allChar = [symbolChar, numberChar, lowerChar, upperChar]


var passChar = prompt("How many characters would you like your password?")



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


if (passChar < 8 || passChar > 128) {
  alert ("Needs between 8-128 characters");
}


passSymbolChar = confirm("Click OK to confirm including specialized characters.");
passLowerChar = confirm("Click OK to confirm including lowercase characters.");
passUpperChar = confirm("Click OK to confirm including uppercase characters.");
passNumberChar = confirm("Click OK to confirm including number characters.");