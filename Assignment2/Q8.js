function countdig(arr,count){
for(let i = 0; i < arr.length; i++){
  if(arr[i] % 5 == 0){
      count++;
  }
}
return count;
}
let arr = [5, 45, 23, 63, 27, 80, 15, 2, 65, 30];
console.log(countdig(arr,0));
