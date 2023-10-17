/* 
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

var generateParenthesis = function(n) {
    
    if(n === 1){
        return ("()")    
    }

    var resultado = []
    var combinacion = []

    const combinaciones = {
        1 : ["()"],  //sumarle () al final de la combinacion  -> combinacion + ()
        2 : ["(",")"],  // envolver la combinacion en () -> (combinacion)
    } 

    backtracking = (combinacion, n, resultado) =>{
        if( n === 0){
            resultado.push( combinacion )
        } else {
            //recursividad a aplicar
            for(prop in combinaciones){
                backtracking(combinacion + combinaciones[prop], n - 1, resultado)

            } 
        }
    }    
    backtracking(combinacion, n, resultado)
    return resultado;
};

console.log( generateParenthesis(1) )
console.log( generateParenthesis(3) )