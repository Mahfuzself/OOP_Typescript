"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// src/Person.ts
class Person {
    constructor() {
        this.name = '';
        this.age = 0;
    }
    setValue(name, age) {
        this.name = name;
        this.age = age;
    }
    getValue() {
        return { name: this.name, age: this.age };
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
exports.Person = Person;
