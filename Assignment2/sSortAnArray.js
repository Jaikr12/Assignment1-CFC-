//Q11
function sorting(arr){
    let start = 0;
    let end = arr.length -1;
    while(start < end){
        while(arr[start] == 0 && start < end ){
            start++;
        }
        while(arr[end] != 0 && start < end ){
            end--;
        }
        if(start < end ){
            [arr[start],arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }
    }
    return arr;
}
let arr = [1,0,1,1,1,0,0,0,1,0,0,1,1];
console.log(sorting(arr));