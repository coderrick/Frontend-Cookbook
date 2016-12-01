/**
 * Credit: http://stackoverflow.com/questions/2880957/detect-inline-block-type-of-a-dom-element
 */

function getDisplayType (element) {
    var cStyle = element.currentStyle || window.getComputedStyle(element, ""); 
    return cStyle.display;
}