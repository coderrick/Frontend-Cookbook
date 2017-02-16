"use strict";
/**
 * Credit: https://www.nczonline.net/blog/2009/06/09/computer-science-in-javascript-binary-search-tree-part-1/
 * 
 */

class Tree {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  } 
}

Tree.prototype.insertBST = function(data) {
  let root = new Tree(data);
  if(root === null){
    return root;
  }else if(this.data <= root.data){
    root.left = this.insertBST(root.left, this.data);
  }else{
    root.right = this.insertBST(root.right, this.data);
  }
//  return root;
}

let t = new Tree(1);
t.insertBST(t, 5);
