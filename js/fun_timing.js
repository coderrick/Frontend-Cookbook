/**
http://stackoverflow.com/questions/20289063/how-to-multiply-using-addition
http://stackoverflow.com/questions/19897824/c-recursively-multiply-2-integers-using-addition
http://stackoverflow.blog/2017/02/What-Programming-Languages-Weekends/?cb=1
http://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute
*/

"use strict";
function tiz(n){
  res = n**n;
  console.log('Result = ' + res);
}

function tiz2(n){
  res = n**n;
  return res;
}

function tiz3(n){
  result = 0;
  for(i = 0; i < n ; i++){
    res += n;
  }
  return result;
}

function tiz4(a, b){
  if (b==1){
    return a;
  }else{
    return a + tiz4(a, b - 1);
  }
}

console.time('tiz');
tiz(100); 
console.timeEnd('tiz');

console.time('tiz2');
tiz2(100); 
console.timeEnd('tiz2');

console.time('tiz3');
tiz3(100); 
console.timeEnd('tiz3');

console.time('tiz4');
tiz4(100); 
console.timeEnd('tiz4');
