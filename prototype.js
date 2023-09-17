
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet=function(){
    console.log(`Hello my name is ${this.name} and my age is ${this.age}`)

}

const john = new Person('john',30);
const jane = new Person('jane',32);

console.log(john.name);
john.greet();
jane.greet();
