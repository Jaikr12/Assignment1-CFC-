//qd.d
let n = 5;
let row = 0,col = 0,colmirror,a = 0;
while(row < n){
    col = 0;
    colmirror = 0;
    let count =1;
    count += a;
    while(colmirror < 2*n -1){
        if(col <n - row - 1 ){
            process.stdout.write("  ");
        }
        else{
            process.stdout.write(count +" ");
            count++;
            
        }

        if(colmirror < n - 1 ){
            col++;
            
        }
        else{
            col--;
            count-=2;
        }
        colmirror++;
    }
    console.log();
    row++;
    a++;
}
