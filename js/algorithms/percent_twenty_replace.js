"use strict";
/**
 * Credit: My Java NetBeans projects from school *Pats self on the back*
 */

function replaceWithDub(a){
  str = a.split('');
  for (letter in str){
    if(str[letter] === " "){
      str[letter] = "%20";
    }
  }
  console.log(str.join('')); //Does the join make it slower
}