function checkPalindrome() {
  // set and clear initial class attributes
  document.getElementById("alert").classList.add("invisible");
  document.getElementById("alert").classList.remove("bg-success", "bg-warning");

  // get regex filtered input from user
  let word = document
    .getElementById("userString")
    .value.replace(/[^A-Z0-9]/gi, "")
    .toLowerCase();

  //make calls to reverse word and display results
  let revWord = reverseString(word);
  let palindromeObj = isPalindrome(word, revWord);
  displayResults(palindromeObj);
}

// custom string traversal using assignment to array to reverse
function reverseString(argString) {
  let length = argString.length;
  let revString = [];
  for (let index = length - 1; index >= 0; index--) {
    revString += argString[index];
  }
  return revString;
}

function isPalindrome(argString, argRevString) {
  let returnObj = { reversed: argRevString };
  if (argString == argRevString) {
    returnObj.isPalindrome = true;
    returnObj.msg = "It is a palindrome.";
  } else {
    returnObj.isPalindrome = false;
    returnObj.msg = "It is not a palindrome.";
  }
  return returnObj;
}

function displayResults(palindromeObj) {
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: <strong>${palindromeObj.reversed}</strong><br/>${palindromeObj.msg}`;

  // display alternate background depending on result and clear invisible
  if (palindromeObj.isPalindrome) {
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("alert").classList.add("bg-success");
  } else {
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("alert").classList.add("bg-warning");
  }
}
