//Q7
function lcm(n1,n2){
    let a1 = n1;
    let a2 = n2;  
    while(a1 % a2 != 0){
let rem = a1 % a2;
a1 = a2;
a2 = rem;
    } 
    let gcd = a2;
    let Lcm =parseInt((n1 * n2)/gcd);
    return Lcm; 
}
console.log(lcm(15,18));
