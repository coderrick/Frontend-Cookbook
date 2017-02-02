"use strict";
/**
 * Introduction to Memoization Javascript
 * 
 */
let powerHunna = function(base){
  powerHunna._cache = powerHunna._cache || {};
  if(!powerHunna._cache[base]){
    console.log("Not in cache, computing...")
    let result;
    result = Math.pow(base, 100);
    powerHunna._cache[base] = result;
  }
  return powerHunna._cache[base];
}