"use strict";
/**
 * Credit: My Java NetBeans projects from school *Pats self on the back*
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