//q7.g
let n = 5;
let row = 0,col = 0,colmirror,rowmirror = 0;
while(rowmirror < 2*n - 1){
    col = 0;
    colmirror = 0;
    while(colmirror < 2*n -1){
        if(col <= row ){
            process.stdout.write("*  ");
        }
        else{
            process.stdout.write("   ");
        
        }
        if(colmirror < n - 1 ){
            col++;
            
        }
        else{
            col--;
        
        }
        colmirror++;
    }
    if( rowmirror < n - 1){
        row++;
    }
    else{
        row--;
    }
    console.log();
    rowmirror++;
}