"use strict";
/**
 * Basically a rip off from "The C Programming Language"
 * Credit: http://www.c4learn.com/c-programs/c-program-reverse-string-without-using.html sort of
 */

function strRev(a){
  str = a.split('');
  i = 0;
  var j = str.length - 1;
console.log(j);
  while(i < j) {
    var temp = str[i];
    console.log(temp);
    str[i] = str[j];
    str[j] = temp;
    i++;
    j--;
  }
  console.log("Reverse string is - " + str.join(''));
}

//Now implement it functionally http://softwareengineering.stackexchange.com/questions/164347/method-flags-as-arguments-or-as-member-variables
