//list of possible choices for the function
var smalls = "abcdefghijklmnopqrstuvwxyz".split("");
var biggies = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specials = "!@#$%^&*+-".split("");

//adding what happens when button is clicked

//^^check this

// begin user selections
function generatePassword() {
  var select = parseInt(prompt("Please select a number between 8 and 128"));

  if (select < 8 && select > 128) {
    return prompt("PLEASE slect a number between 8 and 128");
    //parseint funciton parses a string argument and returns the integer of the specified base
  } else {
    var confirmBiggies = confirm("Do you want upper case letters?");
    var confirmSmalls = confirm("Do you want lower case letters?");
    var confirmNumbers = confirm("Do you want numbers?");
    var confirmSpecials = confirm("Do you want special characters?");
  }

  //user doesn't select any option

  var choicesArr = [];

  if (
    !confirmSmalls &&
    !confirmBiggies &&
    !confirmNumbers &&
    !confirmSpecials
  ) {
    return alert("Please select an option");
  }

  //^^ location does this need to be at the end?
  //user picks all options
  else if (
    confirmSmalls &&
    confirmBiggies &&
    confirmNumbers &&
    confirmSpecials
  ) {
    choicesArr = biggies.concat(smalls, specials, numbers);

    //user picks three************

    //biggie numbers and specials
  } else if (confirmBiggies && confirmNumbers && confirmSpecials) {
    choicesArr = biggies.concat(numbers, specials);
  }
  //biggie numbers and smalls
  else if (confirmBiggies && confirmNumbers && confirmSmalls) {
    choicesArr = biggies.concat(numbers, smalls);
  }
  //biggie smalls and specials
  else if (confirmBiggies && confirmSmalls && confirmSpecials) {
    choicesArr = biggies.concat(smalls, specials);
  }
  //smalls numbers specials
  else if (confirmSmalls && confirmNumbers && confirmSpecials) {
    choicesArr = smalls.concat(numbers, specials);
  }

  //user picks 2 *************
  else if (confirmBiggies && confirmSmalls) {
    choicesArr = biggies.concat(smalls);
  } else if (confirmBiggies && confirmNumbers) {
    choicesArr = biggies.concat(numbers);
  } else if (confirmBiggies && confirmSpecials) {
    choicesArr = biggies.concat(specials);
  } else if (confirmSmalls && confirmNumbers) {
    choicesArr = smalls.concat(numbers);
  } else if (confirmSmalls && confirmSpecials) {
    choicesArr = smalls.concat(specials);
  } else if (confirmNumbers && confirmSpecials) {
    choicesArr = numbers.concat(specials);
  }

  //user picks 1 *************
  else if (confirmBiggies) {
    choicesArr = biggies;
  } else if (confirmSmalls) {
    choicesArr = smalls;
  } else if (confirmNumbers) {
    choicesArr = numbers;
  } else if (confirmSpecials) {
    choicesArr = specials;
  }

  //placed holder for length
  var password = [];

  //random choicesArrion of variables
  //loop
  for (var i = 0; i < select; i++) {
    var pickSelect = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    password.push(pickSelect);
  }

  var pw = password.join("");

  return pw;
}

var generate = document.querySelector("#generate");
generate.addEventListener("click", function () {
  document.getElementById("password").textContent = generatePassword();
});
