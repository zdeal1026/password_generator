// user selections

var select;
var confirmSmalls;
var confirmBiggies;
var confirmNumbers;
var confirmSpecials;

//list of possible choices for the function

smalls = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
biggies = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
specials = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-"]

var pick;


// Assignment Code
var generateBtn = document.querySelector("#generate");

//adding what happens when button is clicked

generateBtn.addEventListener("click", function () {
  pw = generatePassword();
  document.getElementById("password").placeholder = pw;
});

//^^check this

// begin user selections
function generatePassword() {

  select = parseInt(prompt("Please select a number between 8 and 128"));

  if (!select) {

    alert("Plese select a number between 8 and 128");

  }

  else if (select < 8 && select > 128) {

    select = parseInt(prompt("PLEASE slect a number between 8 and 128"));
    //parseint funciton parses a string argument and returns the integer of the specified base

  }

  else {
    confirmBiggies = confirm("Do you want upper case letters?");
    confirmSmalls = confirm("Do you want lower case letters?");
    confirmNumbers = confirm("Do you want numbers?");
    confirmSpecials = confirm("Do you want special characters?");
  };



//user doesn't select any option

if (!confirmSmalls && !confirmBiggies && !confirmNumbers && !confirmSpecials) {

  select = alert("Please hit generate to start");

}

//^^ location does this need to be at the end?
//user picks all options

else if (confirmSmalls && confirmBiggies && confirmNumbers && confirmSpecials) {

  select = biggies.concat(smalls, specials, numbers);

  //user picks three************

  //biggie numbers and specials
} else if (confirmBiggies && confirmNumbers && confirmSpecials) {

  select = biggies.concat(numbers, specials);
}
//biggie numbers and smalls
else if (confirmBiggies && confirmNumbers && confirmSmalls) {

  select = biggies.concat(numbers, smalls);
}
//biggie smalls and specials

else if (confirmBiggies && confirmSmalls && confirmSpecials) {

  select = biggies.concat(smalls, specials);
}
//smalls numbers specials
else if (confirmSmalls && confirmNumbers && confirmSpecials) {

  select = smalls.concat(numbers, specials);

}

//user picks 2 *************

else if (confirmBiggies && confirmSmalls) {

  select = biggies.concat(smalls);

} else if (confirmBiggies && confirmNumbers) {

  select = biggies.concat(numbers);

} else if (confirmBiggies && confirmSpecials) {

  select = biggies.concat(specials);

} else if (confirmSmalls && confirmNumbers) {

  select = smalls.concat(numbers);

} else if (confirmSmalls && confirmSpecials) {

  select = smalls.concat(specials)

} else if (confirmNumbers && confirmSpecials) {

  select = numbers.concat(specials)
}

//user picks 1 *************
else if (confirmBiggies) {

  select = biggies;

} else if (confirmSmalls) {

  select = smalls;

} else if (confirmNumbers) {

  select = numbers;

} else if (confirmSpecials) {

  select = specials;

};

//placed holder for length

var password = []

//random selection of variables
//loop
for (var i = 0; i < select; i++) {
  var pickSelect = select[Math.floor(Math.random() * select.length)];
  password.push(pickSelect);
}



var pw = password.join("");
userInput(pw);
return pw;
}


function userInput(pw) {

  document.getElementById("password").textContent = pw;

}

var generate = document.querySelector("#generate");
generate.addEventListener("click", function () {
  generatePassword();

})
