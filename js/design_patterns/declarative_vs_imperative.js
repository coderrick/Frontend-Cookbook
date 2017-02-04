"use strict";
/**
 * IMPERATIVE IMPLEMENTATION 
 */
function imperative(){
  var numbers = [1,2,3,4,5];
  var doubled = [];

  for (var i = 0; i < numbers.length; i++){
    var newNumber = numbers[i] * 2;
    doubled.push(newNumber); // <- Mutation
  }
  console.log(double);
}

/**
 * DECLARATIVE IMPLEMENTATION 
 */
function declarative(){
  var numbers = [1,2,3,4,5];
  var doubled = numbers.map( n => n *2);
  console.log(doubled);
}