/*
 * I puede estár antes de una V para hacer un 4 y antes de una X para hacer un 9
 * X puede estár antes de una L para hacer un 40 y antes de una C para hacer un 90
 * C puede estar antes de una D para hacer 400 y antes de una M para hacer 900
 */

var romanToInt = function(s){

  var contador = 0;
  var splitString = s;

  var diccionario = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  console.log("String size: "+ s.length)

  do{
    for(prop in diccionario){
      if(splitString.indexOf(prop) > -1){
        console.log(prop +" -> "+ splitString.indexOf(prop));
        contador += diccionario[prop]
        splitString = splitString.replace(prop,"")
        console.log("Nuevo String = " + splitString)
        console.log(splitString.length)
      }
    } 
  }while(splitString.length != 0)




  return contador; 
}


console.log("Roman XIV = "+ romanToInt("XIV")); // 3
console.log("Roman LVIII = "+ romanToInt("LVIII")); // 58
console.log("Roman MCMXCIV = "+ romanToInt("MCMXCIV")); // 1994
