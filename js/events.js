//https://www.youtube.com/watch?v=Bv_5Zv5c-Ts
"use strice";

/**
 * This proves that JavaScript does not look at the event queue until the execution stack is empty
 * Javascript while synchronous deals with Asynchrous events by placing them on the event queue
 * Furthermore if the exe stack is empty it will start to execute things in the event queue in the order 
 * that they are recieved. JavaScript executes Asynchronous events synchronously
 */

//long running function
function waitThreeSeconds(){
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms){}
  console.log('finished function');
}

function clickHandler() {
  console.log('click event');
}

//listen for the click event 
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');