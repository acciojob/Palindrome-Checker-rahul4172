// complete the given function

function palindrome(str){
  let str1 = str.toUpperCase();
  let j = str1.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str1[i] ;
      let y = str1[j-i];
      if( x != y)
      {
    
        return false;
      }
    }
  return true;
   
}

module.exports = palindrome
