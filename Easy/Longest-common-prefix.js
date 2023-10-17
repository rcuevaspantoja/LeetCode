

longestCommonPrefix = function(strs){
  let output = "";
  for (let i = 0; i < strs[0].length; i++) {
      if(strs.every(str => str[i] === strs[0][i])) output += strs[0][i];
      else break;
  }
  return output;
}

var arreglo= ["flower", "flow", "flight"]
/* var arreglo= ["hola"]
var arreglo= [""] */
/* var arreglo= ["cir","car"] */
var arreglo= ["flower","flower","flower","flower"]

/* var arreglo= ["aaa","aa","aaa"]
 */console.log(longestCommonPrefix( arreglo ))



