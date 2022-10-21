// complete the given function

function palindrome(str){
  let ans = true;
  let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;
      let y = str[j-i];
      if( x != y)
      {
    
        ans = false;
      }
    }
    if( ans == true )
    {
      console.log("passed string is palindrome ");
    }
    else
    {
      console.log("passed string not a palindrome");
    }
}

module.exports = palindrome
