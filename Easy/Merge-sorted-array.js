
var merge = function(nums1, m, nums2, n){
    var temp1 = m
    var ordenado = false
    
    for(let i=0 ; i<n ; i++ ){
        nums1[temp1] += nums2[i]
        temp1++
    }
    
    do{
        var temp = 0
        for(let i=0 ; i<m+n ; i++){
            if( nums1[i] > nums1[i+1]){
                temp += 1
            }
        }

        if(temp == 0){
            ordenado = true;
        }

        for(let j=0 ; j<m+n ; j++ ){
            var temp = 0
            if( nums1[j] > nums1[j+1] ){
                temp = nums1[j+1]
                nums1[j+1] = nums1[j]
                nums1[j] = temp
            }
        }
    }while( !ordenado )
    return nums1    
}

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
console.log(merge([4,5,6,0,0,0],3,[1,2,3],3))
