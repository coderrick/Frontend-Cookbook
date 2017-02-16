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

Tree.prototype.insertBST = function(root, data) {
  if(root === null){
    let root = new Tree(4);
  }else if(data <= root.data){
    root.left = insertBST(root.left, data);
  }else{
    root.right = insertBST(root.right, data);
  }
  return root;
}

let t = new Tree(1);
t.insertBST(t, 5);
