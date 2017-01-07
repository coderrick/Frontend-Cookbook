"use strict";
//Pros - Simple/Straight foward
//Cons - Poor encapsulation everything is PUBLIC!
var people = {
  name: "Will",
  sayName: function(){
    alert('will');
  },
  setName: function(newName){
    this.name = newName;
    render();//may need to fix late; this could be sayName()
  }
}

console.log(people.name);//bad since name can be over written by the user who has no idea how this code looks