let readlineSync = require('readline-sync');

let n1 = readlineSync.question('n1 =');
let n2 = readlineSync.question('n2 =');
let ch = readlineSync.question('ch =');
if(ch == "*"){
    let multiply = n1 * n2;
    console.log("n1 * n2 = "+ multiply +"");
}
else if(ch == "/"){
    let div = parseInt(n1 / n2);
console.log("n1 / n2 = "+ div + "");
}
else if(ch == "%"){
    let rem = (n1 % n2);
console.log("n1 % n2 = " + rem + "");
}
else if(ch == "+"){
    let add  = (parseInt(n1) + parseInt(n2));
console.log("n1 + n2 = "+ add + "");
}
else if(ch == "-"){
    let sub = (n1 - n2);
console.log("n1 - n2 = " +sub + "");
}
else{
    console.log("empty!!");
}

