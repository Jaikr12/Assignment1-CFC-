//q7.e
var generate = function(numRows) {
    ans = [];
    const temp = [1];
    ans.push(temp);
   
    for(let i=1;i<numRows;i++){
        let k = [];
        k.push(1);
        for(let j=1;j<i;j++){
            const curr = ans[i-1][j-1]+ans[i-1][j];
            k.push(curr);
            
        }
        k.push(1);
        ans.push(k);
    }
    return ans;     
}
console.log(generate(6));