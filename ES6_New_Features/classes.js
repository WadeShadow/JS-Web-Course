class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    get being(){
        return "human"
    }

    static greeting(){
        console.log("hey there!!!");
    }
}

// console.log(new Person());

class Athlete6 extends Person{
    constructor(name,age,medals){
        super(name,age);
        this.medals = medals;
    }

    winMedal(){
        this.medals +=1;
        return medals;
    }
}

console.log(new Athlete6());

