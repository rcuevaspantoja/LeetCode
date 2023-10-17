
var letterCombinations = function(digits){

  if (digits.length === 0) return [];

  var telefono = {
    "2": ["a","b","c"],
    "3": ["d","e","f"],
    "4": ["g","h","i"],
    "5": ["j","k","l"],
    "6": ["m","n","o"],
    "7": ["p","q","r","s"],
    "8": ["t","u","v"],
    "9": ["w","x","y","z"]
  }
  
  var resultado = []
  var combinacion = []

  backtracking(combinacion, digits, telefono, resultado);

  backtracking = (combinacion, digits, telefono, resultado) => {
    if( digits.length == 0){

      resultado.push(combinacion)
    } else{

      var letras = telefono[  digits[0] ]
      for(const letra of letras){
        backtracking(combinacion + letra, digits.slice(1),telefono, resultado)
      }
    }
  }
  return resultado;
}
console.log(letterCombinations("23"))
console.log(letterCombinations(""))
console.log(letterCombinations("2"))
console.log(letterCombinations("234"))
console.log(letterCombinations("345"))



