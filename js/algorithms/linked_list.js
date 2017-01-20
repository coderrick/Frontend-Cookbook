"use strict";
/**
 * Credit: https://www.nczonline.net/blog/2009/04/13/computer-science-in-javascript-linked-list/ 
 */

function LinkedList() {
  this._length = 0;
  this._head = null;
}

LinkedList.prototype.add = function (data) {
  //create a new node, place data in
  var node = {
    data: data,
    next: null
  },
  //used to traverse the structure
  current;
  //special case: no items in the list yet
  if (this._head === null) {
    this._head = node;
  } else {
    current = this._head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  //don't forget to update the count
  this._length++;
}
