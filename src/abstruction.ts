export abstract class Animal {
   abstract makeSound(): void;
  move(): void {
    console.log("Moving...");
  }
}

export class Dog extends Animal {
  makeSound() : void {
    console.log("Woof!");
  }
}

export class Cat extends Animal {
  makeSound() : void {
    console.log("Meow!");
  }
}
