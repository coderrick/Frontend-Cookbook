function getDisplayType (element) {
    var cStyle = element.currentStyle || window.getComputedStyle(element, ""); 
    return cStyle.display;
}