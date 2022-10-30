// complete the given function

function palindrome(str){
  let i = 0, j = str.length();
  
  while(i < j){
    if(str.charAt(i) == str.charAt(j)){
      i++;
      j--;
    }
    else
      break;
  }
}
module.exports = palindrome
