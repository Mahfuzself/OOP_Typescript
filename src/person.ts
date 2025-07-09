// src/Person.ts
export class Person {
  private name: string = '';
  private age: number = 0;

  public setValue(name : string,age :number):void{
    this.name = name;
    this.age = age;
  }
public getValue():{name:string,age:number}{
    return {name:this.name,age:this.age};
  }

  public greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
