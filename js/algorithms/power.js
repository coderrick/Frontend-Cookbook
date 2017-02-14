"use strict";
/**
 * Credit:http://stackoverflow.com/questions/20923780/how-to-explain-this-algorithm-for-calculating-the-power-of-a-number
 * 
 */

//This solution in O(n)
function powOne(x, n){
  if(n === 0){ 
    return 1;
  }else{
    return x * powOne(x, n - 1);
  }
}

//This solution is O(log n)
function powOne(x, n){
  if(n === 0){ 
    return 1;
  }else if(n / 2 === 0){
    let y = powOne(x, n/2);
    return y * y;
  }else{
    return x * powOne(x, n/2);
  }
}