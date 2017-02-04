/**
 * Look in to how to simulate private static access in JavaScript
 * 
 * Helpful sources:
 * http://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
 * https://www.youtube.com/watch?v=wqRDI4Pu5yY&t=2m42s
 * Busted Modulo http://stackoverflow.com/questions/4467539/javascript-modulo-not-behaving
 * 
 */
"use strict";
function viewport_size(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    alert('viewport-width = '+ w + ', viewport-height = ' + h);
}

/**
 * Determine whether an html element is BLOCK or INLINE
 * Credit: http://stackoverflow.com/questions/2880957/detect-inline-block-type-of-a-dom-element 
 */
function getDisplayType (element) {
    var cStyle = element.currentStyle || window.getComputedStyle(element, ""); 
    return cStyle.display;
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

/**
 * My hamfisted attemp at creating a Monad.
 */
function monad(mTransform){
  a = new Array(1,2,3,4);
  a.reduce; 
}

function mod(n, m) {
        return ((n % m) + m) % m;
}
