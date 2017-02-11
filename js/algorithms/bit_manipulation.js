"use strict";
/**
 * Credit: Cracking the Code Interview
 */

function clearBit(num, i){
  let mask = (1 << i) - 1;
  return num & mask;
}

function clearBitsMSBthroughI(num, i){
  let mask = ~((1 << i) - 1);
  return num & mask;
}