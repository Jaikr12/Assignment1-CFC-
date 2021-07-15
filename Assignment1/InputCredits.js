//q1
let readlineSync = require('readline-sync');
 
let credits = readlineSync.question();

if(credits >= 7500 ){
    console.log("Tera leader");
    
}
else if( credits < 7500  && credits >=6000){
    console.log("Gega leader");

}
else if(credits < 6000 && credits >= 4500){
   console.log("Mega leader");

}
else{
    console.log("Rising Star");
}
