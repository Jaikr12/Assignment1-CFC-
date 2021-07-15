//q7.a
let n = 5;
let row = 0,col = 0;
while(row < n){
    col = 0;
    while(col <= row){
    process.stdout.write("* ");
    col++;
    }
    row++;
    console.log();
}