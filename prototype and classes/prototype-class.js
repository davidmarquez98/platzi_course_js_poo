function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados
}

Student.prototype.aprobarCursos = function (curso) {
    this.cursosAprobados.push(curso);
}

const student = new Student(
    "Juana",
    20,
    ["HTML", "JS"]
)

console.log("Student Juana before using prototype: " + student.cursosAprobados);

student.aprobarCursos("Java");

console.log("Student Juana after using function from object prototype: " + student.cursosAprobados);

// CLASS 
console.log("*********************************")

class StudentDos {
    cursosAprobados = [];

    constructor({ name, age }) {
        this.name = name;
        this.age = age;
    }

    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }
}

const miguel = new StudentDos({
    name: "Miguel",
    age: 30
});
miguel.aprobarCurso("Mercado");
miguel.aprobarCurso("Inversion");
console.log("Class Student after using function: " + miguel.cursosAprobados);

// Class Practice
console.log("*********************************")

class MainStudent {
    constructor({
        name,
        age,
        twitter = null,
        instagram = null,
        facebook = null,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.age = age;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class LearningPaths {
    constructor({ name }) {
        this.name = name;
    }
}

const escuelaWeb = new LearningPaths({name : "Java Academy"});

const studentSchool = new MainStudent({
    name: "Carlos",
    age: 40,
    twitter: "cmonzon",
    learningPaths: [escuelaWeb]
});

console.log("Class Student using atributes and object inside\n");
console.log("Name: "+studentSchool.name);
console.log("\nAge: "+studentSchool.age);
console.log("\nTwitter: "+studentSchool.socialMedia.twitter);
console.log("\nSchools: ");
studentSchool.learningPaths.map(school =>{
    console.log("\n- "+school.name);
})

/* 
Dadas la siguientes clases:

Clase band con las propiedades:

name - string
genders - Array
members - Array
Crea una clase llamada "member" con las propiedades:

name - string
instrumento - string
Escribe la lógica para agregar members a la clase band en la función addMember. En esta función no debe dejar agregar más de un baterista, es decir hay que validar que solo se pueda agregar un member con instrumento "Bateria".

La solución debería tener un input y output como los siguientes:

Input

  const data = {
    name: "Los Jacks",
    genders: ["rock", "pop", "post-punk"],
    members: [],
  }
  const band = new band(data)
  band.addMember(new member({ name: "Erik", instrumento: "Guitarra" }))
  band.addMember(new member({ name: "Paul", instrumento: "Bateria" }))

Output

{
  "name":"Los Jacks",
  "genders":["rock","pop","post-punk"],
  "members":[
    {"name":"Erik","instrumento":"Guitarra"},
    {"name":"Paul","instrumento":"Bateria"}
  ]} 
  */


class Band {
    constructor({
      name,
      genders = [],
    }) {
      this.name = name;
      this.genders = genders;
      this.members = [];
    }
    addMember(newMember) {
      if (newMember.instrument != "Bateria") {
        this.members.push(newMember); 
      } else if (this.members.filter(member => {
        member.instrument == "Bateria"
      }).length == 0) {
        this.members.push(newMember);
      }
    }
  }
  
  class Member {
    constructor({ name, instrument}) {
      this.name = name;
      this.instrument = instrument;
    }
  }
  
  const data = {
    name: "Los Jacks",
    genders: ["rock", "pop", "post-punk"],
    members: [],
  }
  
  const band = new Band(data);
  
  band.addMember(new Member({ name: "Erik", instrument: "Guitarra" }))
  band.addMember(new Member({ name: "Paul", instrument: "Bateria" }))

  console.log(band);


