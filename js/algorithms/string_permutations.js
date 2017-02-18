"use strict";
/**
 * Credit: http://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
 * 
 */

function swap(x, y){
  let temp = x;
  x = y;
  y = temp;
}

function permute(str, left, right){
  let i;
  let a = str;
  if(left === right){
    console.log(str)
  }else{
    for(i = left; i <= right; i++){
      swap((a + left), (a + i));
      permute(a, left + 1, right);
      swap((a + left), (a + i));
    }
  }
}

permute(["A","B","C"], 0, 2);