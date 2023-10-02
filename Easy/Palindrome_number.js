/*Ver si la palabra es palindromo para números. Pts extra por no convertir los numeros  a texto*/

var isPalindrome = function(x){

  console.log("entrada: "+ x.toString().split("").reverse().join(""))

  if( x.toString().split("").reverse().join("") == x.toString()){
    return( true )
  } else{
    return ( false )
  }
}

console.log( isPalindrome(-121)); 
