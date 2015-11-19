function isPalindrome() {

  var possiblePalindrome = document.getElementById("Palindrome-Holder").value;
  var palindromeNoSpace = possiblePalindrome.replace(/\s/g, '');//
  var reversed = palindromeNoSpace.split("").reverse().join("");

  if(palindromeNoSpace == reversed){
    document.getElementById("Answer").innerHTML = "is a palindrome";
  }else{
    document.getElementById("Answer").innerHTML = "not a palindrome";
  }

}
