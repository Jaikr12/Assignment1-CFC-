//Q1
function deciToOct(n){
    let newNo = 0;
    let p = 1;
   
    while(n !=0){
        let rem = n % 8;
        newNo = newNo + rem *p;
        n = parseInt(n/8);
        p = p*10;
    }
    return newNo;
}
console.log(deciToOct(453));