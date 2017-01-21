"use strict";
/**
 * Credit: https://www.youtube.com/watch?v=ozmE8G6YKww
 * 
 */

//A simple function that basically loops, printing ou the number of times you've recursed 
function rec(n){
  if(n === 0){
    return;
  }else{
    rec(n - 1);
    console.log('call stack - ' + n);
  }
}

function fact(n){
  if(n === 0){
    return 1;
  }else{
    result = fact(n-1);
    return result * n;
  }
}