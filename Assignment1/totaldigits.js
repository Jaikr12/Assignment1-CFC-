function countDig(n1){
    let rem = 0,count = 0;
    while(n1 != 0){
        rem  = n1 % 10;
        count++;
        n1 = parseInt(n1/10);
    }
    return count;
}
console.log(countDig(202230));