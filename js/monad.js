/**
 * Credit: https://curiosity-driven.org/monads-in-javascript
 * Real-deal: http://mrbool.com/getting-started-with-java-monads/34302
 */
"use strict";

function multiplyBy2(num){
  return num * 2;
}

function divideBy4(num){
  return num/4;
}

function round(num){
  return Math.round(num);
}

function applyOps(num){
  return round(multiplyBy2(divideBy4(num)));
}

/**
 * The above code outlines how to make a composite function (with no temp variables)
 * However the following code will prvide a way to do it Monadically.
 */

