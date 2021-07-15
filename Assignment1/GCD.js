//q3
function gcd(n1,n2){
    let b1 = n1;
    let b2 = n2;
    
    while(b1 % b2 != 0){
let rem = b1 % b2;
b1 = b2;
b2 = rem;
    } 
    let GCD = b2;
    return GCD;
}
console.log(gcd(98,56));
