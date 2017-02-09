t"use strict";
/**
 * Basically a rip off from "The C Programming Language"
 * Credit: http://www.c4learn.com/c-programs/c-program-reverse-string-without-using.html sort of
 * http://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript
 * http://stackoverflow.com/questions/12132178/using-join-method-to-convert-array-to-string-without-commas
 */

//Note Javascript strings are IMMUTABLE so the string must be converted to an array first
function strRev(a){
  let str = a.split('');
  let i = 0;
  let j = str.length - 1;
  
  while(i < j) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    i++;
    j--;
  }
  return "Reversed String = " + str.join('');
}

//Now implement it functionally http://softwareengineering.stackexchange.com/questions/164347/method-flags-as-arguments-or-as-member-variables
