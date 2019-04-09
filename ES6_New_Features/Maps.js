var map = new Map();

map.set("question","What is the official name of ES6 version of JS?");
map.set(1,"ES5");
map.set(2,"ES6");
map.set(3,"ES2015");
map.set(4,"ES7");
map.set("correct", 3);
map.set(true,"Right!");
map.set(false,"WROOOONG(((");

// We can check, whether the value is in map:
map.has(3); // => true

// We can delete any entries:
// map.delete("question"); 

// And we can even clear the entire Map:
// map.clear();

// Map has its own Iterator => It can be iterable through forOF, forEach...
// Inside forEach we have access to (currentValue, currentKey, entireMap)
/* map.forEach((value,key) => {
    console.log(`this is a key ${key} and it is set to a value ${value}`);  
}); */

 for(let [key,value] of map.entries()){
     
     if(typeof key === 'number'){
        console.log(`this is a key ${key} and it is set to a value ${value}`);

     }
 }
 