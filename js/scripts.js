var userSentence = prompt("Type a sentence without a period.")

function newString (userSentence) {
  var first = userSentence.charAt(0).toUpperCase();
  var last = userSentence.charAt(userSentence.length-1).toUpperCase();
  return first + last;
}

function reverseString (newString) {
  return newString.split("").reverse("").join("");
}

function concatString (reverseString) {
  return userSentence.concat(reverseString) + ".";
}

function halfString (userSentence) {
  var roundDown = parseInt(userSentence.length / 2);
  return letter = userSentence.charAt(roundDown);
}

var result = halfString(userSentence) + (concatString(newString(reverseString(userSentence))))

alert(result);
