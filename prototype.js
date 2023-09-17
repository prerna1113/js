

function Person(name,age){
    this.name = name;
    this.age = age
}

Person.prototype.greet= function(){
    console.log(`hello my name is ${this.name} and age is ${this.age}`);
}

 const john = new Person('john', 49)

 john.greet();