//Q17
function permute(orgstr,substr){
    if(orgstr ===""){
        console.log(substr.split(""));
        return;
    }
    let ch = orgstr[0];
    let newstr = orgstr.substring(1);
    for(let i= 0;i <= substr.length;i++){
        let left = substr.substring(0 , i);
        let right =substr.substring(i , substr.length);
        let final = left + ch + right;
        permute(newstr,final);
    }
}


permute("726","");