import { Person } from "./person";
// import { Animal } from "./abstruction";
import { Dog, Cat } from "./abstruction";

const person1 = new Person();
person1.setValue("Alice", 30);
person1.greet();

const dog = new Dog();
dog.makeSound();
dog.move();

const cat = new Cat();
cat.makeSound();
cat.move();

