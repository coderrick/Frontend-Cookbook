"use strict";
/**
 * http://stackoverflow.com/questions/1728per5948/javascript-determine-if-all-characters-in-a-string-are-unique-and-if-not-delet
 * http://stackoverflow.com/questions/19484406/detecting-if-a-string-has-unique-characters-comparing-my-solution-to-cracking
 * 
 */

function unq(str){
  let unique = new Map();
  for(i = 0; i < str.length; i++){
    unique.set(str.charAt(i));
  }
  if(unique.size!= str.length){
    return false;
  }
  return true;
}
