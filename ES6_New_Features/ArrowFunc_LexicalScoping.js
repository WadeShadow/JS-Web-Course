/* var box1 = {
    color:"green",
    position: 1,
    clickMe: function(){
        document.querySelector(".green").addEventListener("click", () => alert(`position ${this.position}\ncolor ${this.color}`));
    }
};

box1.clickMe(); */

function Person(name){
    this.name = name;
}

// Person.prototype.friends5 = function(friends){
//     var arr = friends.map(function(el){
//         return `${this.name} is friends with ${el}`;
//     });
//     return arr;
// }

john = new Person("John");
friends = ["Me", "Toha"];




// ES6
Person.prototype.friends5 = function(friends){
    var arr = friends.map((el) => 
         `${this.name} is friends with ${el}`
    );
    return arr;
}

console.log(john.friends5(friends));

