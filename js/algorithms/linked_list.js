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


//************************************************************************************************* */
//**********************Questions***************************** */
//************************************************************************************************* */

l2 = {
  val:5,
  next:{
    val:6,
    next:{
      val:4,
      next:null
    }
  }
}

l1 = {
  val: 2,
  next: {
    val: 4,
    next:{
      val:3,
      next: null
    }
  }
}

ListNode.prototype.add = function(list1, list2){
  let a = list1;
  let b = list2;
  let c = new ListNode(0);
  let result = new ListNode(0);
  while(a.next !== null || b.next !== null){
    result.val = a.val + b.val;
    a = a.next;
    b = b.next;
    //c = c.next;
  }
  c.next = result 
  return c;
}

const addTwoNumbers = function(l1, l2, carry) { 
  const total = l1.val + l2.val + (carry || 0); 
  const res = new ListNode(total % 10); 
  const newCarry = total >= 10 ? 1 : 0; 
  if (newCarry || l1.next !== null || l2.next !== null) { 
    res.next = addTwoNumbers(l1.next || new ListNode(0), l2.next || new ListNode(0), newCarry); 
  } 
  return res; 
};