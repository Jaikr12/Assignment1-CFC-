//Q10
function arrisSorted(arr){
    for(let i = 0;i < arr.length; i++){
        if(arr[i] > arr[i+1]){
         return false;
        }
        }
        return true;
    }



let arr = [1,2,3,4,5,10,7,8,9];
console.log(arrisSorted(arr));