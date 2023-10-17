

var mergeTwoLists = function(list1, list2) {
    var respuesta = []
    var arreglos_sumados = list1.concat(list2)
    respuesta.length = arreglos_sumados.length

    if(respuesta.length === 0){
        return []
    } if(respuesta.length === 1){
        return [list1.concat(list2)]
    }

    

    for(let i=0 ; i < respuesta.length ; i++){
        var menor = Math.min(...arreglos_sumados)
        respuesta[i] = menor
        arreglos_sumados.splice(arreglos_sumados.indexOf(menor), 1)
    }
    return respuesta
};


lista1 = [1,2,4]
lista2 = [1,3,4]

console.log( mergeTwoLists( lista1, lista2 ) )

