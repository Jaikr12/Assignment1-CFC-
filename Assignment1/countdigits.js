//q5
function countDig(n1,a){
    let rem = 0,count = 0;
    while(n1 != 0){
        rem  = n1 % 10;
        if(rem == a){
            count++;
        }
        n1 = parseInt(n1/10);
    }
    return count;
}
console.log(countDig(12344545364546, 4));