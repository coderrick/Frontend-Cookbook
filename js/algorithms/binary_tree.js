"use strict";
/**
 * Credit: https://www.nczonline.net/blog/2009/06/09/computer-science-in-javascript-binary-search-tree-part-1/
 * 
 */

class TreeNode {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  } 
}

TreeNode.prototype.insertBST = function(data) {
  if(this.data === data){
    return;
  }
  if(this.data < data){
    if(this.right){
      this.right.insertBST(data);
    }else{
      this.right = new Tree(data);
    }
    return;
  }
  if(this.left){
    this.left.insertBST(data);
  }else{
    this.left = new Tree(data);
  }
}

let t = new Node();
t.insertBST(6);
t.insertBST(4);
t.insertBST(5);
t.insertBST(8);
t.insertBST(10);

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
  
//   insertBST(data) {
//     if (this.data === data) return
//     if (this.data < data) {
//       if (this.right) this.right.insertBST(data)
//       else this.right = new Node(data)
//       return
//     }
    
//     if (this.left) this.left.insertBST(data)
//     else this.left = new Node(data)
//   }
// }
