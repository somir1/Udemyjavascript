class Human{
    constructor(){
    this.gender = "Male"
  }
  
    printGender(){
    console.log(this.gender);
  }
}

class Person extends Human{
  constructor(){
    super();
    this.name = "Samir"
  }
  
  printName(){
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();