class Person {
  type = "human";
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name + " says Hi!");
  }
}
const max = new Person("Max");
// max.greet();
// console.log(max.type);

// console.log(max.__proto__ === Person.prototype);

class Programmer extends Person {
  constructor(name, job) {
    super(name);

    this._job = job;
  }
  get job() {
    return this._job.toUpperCase();
  }
  }
  set job(job) {
    if (job.length < 2) {
      console.log("Validation failed");
    } else {
      this._job = job;
      }
			greet() {
				super.greet();
				console.log("Rewritten");
			}	
}


const frontend = new Programmer("Max", "Frontend");
// console.log(frontend);
// frontend.greet();
console.log(frontend.job);
frontend.job = "2";
console.log(frontend.job);
