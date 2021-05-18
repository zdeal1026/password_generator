
//list of possible choices for the function

var smalls = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var biggies = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-"]

// user selections

var select;
var confirmSmalls;
var confirmBiggies;
var confirmNumbers;
var confirmSpecials;

// Assignment Code
var generateBtn = document.querySelector("#generate");

get.addEventListener("click", function () {
  pw = generatePassword();
  domcument.getElementById("generate").placeholder = pw;
}

// begin user selections

enter = parseInt(prompt("Please select a number between 8 and 128"));

if (!enter) {
  alert("Plese select a number between 8 and 128");
} else if (enter < 8 || enter > 128) {
  enter parseInt(prompt("PLEASE slect a number between 8 and 128"));
} else {
  var confirmBiggies = confirm("Do you want upper case letters?");
  var confirmSmalls = confirm("Do you want lower case letters?");
  var confirmNumbers = confirm("Do you want numbers?");
  var confirmSpecials = confirm("Do you want special characters?");
};

//user doesn't select any option

if (!confirmSmalls && !confirmBiggies && !confirmNumbers && !confirmSpecials) {
  choices = alert("Please select something to build your password");
}
//user picks all options

else if (confirmSmalls && confirmBiggies && confirmNumbers && confirmSpecials) {
  choices = character.concat(biggies, smalls, specials, numbers);

 //user picks three************

//biggie numbers and specials
} else if (confirmBiggies && confirmNumbers && confirmSpecials) {
  
  choice = biggies.concat( numbers , specials);
}
//biggie numbers and smalls
else if (confirmBiggies && confirmNumbers && confirmSmalls) {

  choice = biggies.concat( numbers , smalls);
}
//biggie smalls and specials

else if (confirmBiggies && confirmSmalls && confirmSpecials) {

  choice = biggies.concat(smalls, specials);
} 
//smalls numbers specials
else if (confirmSmalls && confirmNumbers && confirmSpecials) {

  choice = smalls.concat( numbers, specials);

}

//user picks 2 *************

else if (confirmBiggies && confirmSmalls) {

  choices = biggies.concat(smalls);

} else if (confirmBiggies && confirmNumbers) {
  
  choices = biggies.concat(numbers);

} else if ( confirmBiggies && confirmSpecials) {

  choices = biggies.concat(specials);

} else if ( confirmSmalls && confirmNumbers) {

choices = smalls.concat(numbers); {

  else if ( confirmSmalls && confirmSpecials) {

    choices = smalls.concat(specials)
  
  }else if (confirmNumbers && confirmSpecials) {}

 choices = numbers.concat(specials)
}

//user picks 1 *************
else if (confirmBiggies) {
  
  choices = biggies; 

} else if (confirmSmalls) {

  choices = smalls;

} else if (confirmNumbers) {

  choices = numbers;

} else if (confirmSpecials) {

  choices - specials; 

};








//user picks 1


}






//errors has to go somewhere

///* so i need a set of functions with prompts to use user data to construct password
//first question should ask if you want to generate a password
//after that how many characters
//second question should ask if you want numbers
//third should ask if you want upper case letters
//fourth should as if you want lower case letters
//
//you need functions for each scenario that cascade with the last using return to stop function? 




// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");
//
//  passwordText.value = password;
//
//}
//
//
//
//// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
//generateBtn.addEventListener("length of password", writePassword)

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page