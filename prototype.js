
function Person(name,age){
    this.name = name;
    this.age = age;

}

Person.prototype.greet = function(){
    console.log(`Hello ${this.name} and ur age is ${this.age}`);
}

const dove = new Person('dove', 30);

dove.greet();