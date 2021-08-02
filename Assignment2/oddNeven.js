//Q12
function sortoddneven(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        while(arr[start] % 2 == 0 && start < end){
            start++;
    }
        while(arr[end] % 2 != 0 && start < end){
            end--;
    }
        if(start < end){
           let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
    }
}
    return arr;
}

let arr1 = [3,8,5,13,6,12,18,5];
console.log(sortoddneven(arr1));
