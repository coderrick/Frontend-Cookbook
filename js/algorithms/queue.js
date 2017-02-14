"use strict";
/**
 * Credit:http://rebootjeff.github.io/blog/2014/01/04/queues-stacks-javascript-class-patterns/
 * https://www.youtube.com/watch?v=okr-XE8yTO8
 */

class Queue{
  constructor(){
    this.q = [];
    this.front = -1;
    this.rear = -1;
  }
}

Queue.prototype.isEmpty = function(){
  if(this.front  === -1 && this.rear === -1){
    return true;
  }else{
    return false;
  }
}

Queue.prototype.Enqueue = function(i){
  if(this.rear !== this.q.length - 1){
    return "QUEUE IS FULL";
  }else if(this.isEmpty()){
    this.front, this.rear = 0;
  }else{
    this.rear += 1;
  }
  this.q[this.rear] = i;
}

Queue.prototype.Dequeue = function(i){
  if(this.isEmpty()){
    return;
  }else if(this.front === this.rear){
    this.front, this.rear = -1;
  }else{
    this.front += 1;
  }
}


