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


