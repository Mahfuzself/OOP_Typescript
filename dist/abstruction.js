"use strict";
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}
