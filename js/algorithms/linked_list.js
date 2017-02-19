"use strict";
/**
 * Credit: https://www.nczonline.net/blog/2009/04/13/computer-science-in-javascript-linked-list/ 
 */

let NodeL = function(d) {
  this.data = d;
  this.next = null;
}

NodeL.prototype.appendToTail = function(d) {
  let NodeEnd = new NodeL(d);
  let n = this
  while(n.next !== null){
    n = n.next;
  }
  n.next = NodeEnd;
}

NodeL.prototype.deleteNode = function(head, d) {
  let n = head;
  
  if(n.data == d){
    return head.next;
  }
  
  while(n.next !== null){
    if(n.next.data == d){
      n.next = n.next.next;
      return head;
    }
    n = n.next;
  }
  return head;
}

NodeL.prototype.size = function(n) {
  let i = 0;
  while(n.next !== null){
    n = n.next;
    i++;
  }
  return i;
}

NodeL.prototype.listToArray = function(n) {
  let s = [];
  while(n.next !== null){
    n = n.next;
    s.push(n.data);
  }
  return s;
}
