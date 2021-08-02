//Q9
function countPrime(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        let isPrime = false;
        for (let j = 2; j < arr[i]; j++){
            if (arr[i] % j === 0) {
                isPrime = true;
                break;
            }
        }
        if (isPrime === false) {
            count++;
        }
    }
    return count;
}

let arr = [2,3,5,6,13,25,33,17];
 console.log(countPrime(arr));
