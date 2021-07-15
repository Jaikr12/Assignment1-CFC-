//q6
function totaldig(n1){
    let rem = 0,revNo = 0;
    while(n1 != 0){
        rem  = n1 % 10;
        revNo = rem + revNo*10;
        n1 = parseInt(n1/10);
    }
    return revNo;
}
console.log(totaldig(2021));