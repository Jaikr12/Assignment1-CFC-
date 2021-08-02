//Q13
function revesreArray(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start < end ){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }
    return arr;
}

let arr1 =[1,2,3,4,5,6,7]; 
console.log(revesreArray(arr1));