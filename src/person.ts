// src/Person.ts
export class Person {
  private name: string = '';
  private age: number = 0;

  public setValue(name : string,age :number):void{
    this.name = name;
    this.age = age;
  }
public getName() :string{
    return this.name;
  }
  public getAge() :number{
    return this.age;
  }
  public greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
