/**
 * Look in to how to simulate private static access in JavaScript
 * 
 * Helpful sources:
 * http://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
 * 
 */
function viewport_size(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    console.log('viewport-width = '+ w + ', viewport-height = ' + h);
}
viewport_size();