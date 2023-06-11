class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDesc() {
    console.log(this.name + " is " + this.age + " year's old");
  }
}

const u1 = new User("jahidul", 23);

class Demo extends User {}

const d1 = new Demo("akash", 50);

d1.getDesc();
