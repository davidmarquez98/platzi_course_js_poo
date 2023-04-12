class Course{
  #name;

  get name(){ return this.#name; }
  set name(name){ this.#name = name; }
}

const course = new Course();

course.name = "Java";
console.log(course.name);

