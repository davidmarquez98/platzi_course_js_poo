/*
Dentro de este reto encuentras las clases Student y Comment con un código base, recuerda ir a verlas en el sistema de archivos.

Tu reto consisten en:

Hacer que la clase TeacherStudent herede de Student
Agrega un propiedad de tipo Array llamada skills a la clase TeacherStudent.
Sobrescribir el método publicarComentario dentro de TeacherStundent.
Debe agregar el array de skills en su la propiedad studentRole de la clase Comment.
El string debe verse de la siguiente manera "profesor de skill1, skill2".
Input

  const skills = ["js", "python", "mongodb"]
  const props = {
    name: "Erik Ochoa",
    username: "elyager"
  }

  const profesor = new TeacherStudent(props, skills)
  profesor.publicarComentario('Mi primer comentario')

Output

{
  "studentName":"Erik Ochoa (profesor de js,python,mongodb)",
  "likes":"0 likes",
  "content":"Mi primer comentario"

*/

import { Comment, Student } from './../../polymorphism and herency/pholymorphism_herency.js';

class TeacherStudent extends Student{

  constructor(props, {skills = []}) {
    super(props);
    this.skills = skills;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      message: commentContent,
      name: this.name,
      rolls: `Profesor de ${this.skills}`
    });
    return comment.publish();
  }
}

const carlos = new TeacherStudent({
  name:"Carlos",
  email:"cmonzon@gmail.com",
}, {skills:"js"});

carlos.publicarComentario("Como me gusta JavaScript");