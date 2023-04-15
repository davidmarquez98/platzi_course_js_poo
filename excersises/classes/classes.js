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


