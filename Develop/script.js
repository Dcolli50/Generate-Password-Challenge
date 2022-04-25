var generateBtn = document.querySelector("#generate");


var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  var password = "";
  var passwordChar = "";
  // Creates user prompt to select password length
  var passwordLengthUser = prompt("How many characters would you like your password to be? Password must be between 8-128 characters")
  passwordLengthUser = parseInt(passwordLengthUser)

  if (passwordLengthUser < 8) {
    alert("Password must have more then 7 characters!");
  }

  if (passwordLengthUser > 128) {
    alert("password must not have more then 128 characters!");
  }

  //creates confirm boolean for lowercase "yes or no"
  var lowercaseCharactersChoice = confirm("Sprinkle in some lowercase characters?");

  if (lowercaseCharactersChoice) {
    passwordChar += lowercaseChar;
  }

  //creates confirm boolean for upercase "yes of no"
  var uppercaseCharactersChoice = confirm("Sprinkle in some uppercase characters?")

  if (uppercaseCharactersChoice) {
    passwordChar += uppercaseChar;
  }

  // Creates boolean for numbers "yes or no"
  var numericalCharactersChoice = confirm("Sprinkle in some numbers?");

  if (numericalCharactersChoice) {
    passwordChar += specialChar;
  }

  for (let i = 0; i < passwordLengthUser; i++) {
    password = passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    pwTextArea.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
