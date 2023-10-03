
var removeElement = function(nums, val){

    let contadorEliminados = 0
    for(let i=0 ; i< nums.length ; i++){
        if(nums[i] == val){
            nums[i] = "_"
            contadorEliminados += 1
        }
    }
    console.log(nums)

    for(let i=0 ; i<=nums.length-1 ; i++){
        for(let j=0 ; j<=nums.length-i-1 ; j++){
            if(nums[j] == '_' && (j+1 < nums.length-1)){
                nums[j] = nums[j+1]
                nums[j+1] = '_' 
            }
            if(nums[j] > nums[j+1]){
                let pivote = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = pivote
            }
        }
    }
    console.log(nums)
    return nums.length-contadorEliminados
}

console.log(removeElement([4,5],5))