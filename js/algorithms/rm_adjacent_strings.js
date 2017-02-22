"use strict";
function removeAdjacentStrs(string) {
  stack = [];
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) !== stack[stack.length - 1]) {
      stack.push(string.charAt(i));
    } else {
      stack.pop();
    }
  }
  console.log(stack.join(''));
  return stack.join('');
}