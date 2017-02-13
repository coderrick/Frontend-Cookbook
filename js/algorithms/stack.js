"use strict";
/**
 * Credit:http://rebootjeff.github.io/blog/2014/01/04/queues-stacks-javascript-class-patterns/
 * https://www.youtube.com/watch?v=sFVxsglODoo
 * https://www.youtube.com/watch?v=oY4iNxteLJ4
 * https://www.safaribooksonline.com/library/view/data-structures-and/9781449373931/ch04.html
 */
let Stackk = function() {
  this.top = -1;
  this.a = [];
}

Stackk.prototype.push = function(i){
  this.top += 1;
  this.a[this.top] = i;
}

Stackk.prototype.pop = function(){
  this.top -= this.top;
}

/**
 * Try implementing with call, apply, bind 
 */
