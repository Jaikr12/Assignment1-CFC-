//Q16
function subset(orgstr,substr){
    if(orgstr ===""){
        console.log(substr.split(""));
        return;
    }
    
    let ch = orgstr[0];
    let newstr = orgstr.substring(1);
    subset(newstr, substr + ch);
    subset(newstr, substr);
}


subset("726","");