const boxes = document.querySelectorAll("div");

// boxes is some kind of browser-originated data structure that only resembles arrays.
// in ES5 we used to make array from it using .slice method:

var boxesArray = Array.prototype.slice.call(boxes,0);

// In ES6 we now have this one: 

var boxesArray = Array.from(boxes);
boxesArray.forEach(element => {
    element.style.backgroundColor = "dodgerblue";   
});