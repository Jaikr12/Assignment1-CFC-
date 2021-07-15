//q7.b
let n = 5;
let row = 0,col = 0,count;
while(row < n){
    col = 0;
    count = 1;
    while(col <= row){
        let n = count.toString();
    process.stdout.write(n + " ");
    col++;
    count++;
    }
    row++;
    console.log();
}