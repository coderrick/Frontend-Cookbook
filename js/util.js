/**
 * Look in to how to simulate private static access in JavaScript
 * 
 * Helpful sources:
 * http://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
 * https://www.youtube.com/watch?v=wqRDI4Pu5yY&t=2m42s
 * 
 * 
 */
"use strict";
function viewport_size(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    alert('viewport-width = '+ w + ', viewport-height = ' + h);
}

/**
 * Implement an extend function that takes an object and extends it with new properties.
 * And makes it work on n levels of recursion
 */
function extend_obj(o){
    return o;
}

/**
 * Implement an event emitter base class that allows you to add event listeners
 */
function event_emitter(){

}

/**
 * What is the difference between call() and apply()
 */

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * 
 * Regular Expressions
 */
function regi(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
