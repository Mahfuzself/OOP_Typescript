"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// src/Person.ts
class Person {
    constructor(Name, Age) {
        this.name = Name;
        this.age = Age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
exports.Person = Person;
