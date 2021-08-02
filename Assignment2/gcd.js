//Q6
function gcd(n1,n2){
    let a1 = n1;
    let a2 = n2;
    
    while(a1 % a2 != 0){
let rem = a1 % a2;
a1 = a2;
a2 = rem;
    } 
    let GCD = a2;
    return GCD;
}
console.log(gcd(18,15));
