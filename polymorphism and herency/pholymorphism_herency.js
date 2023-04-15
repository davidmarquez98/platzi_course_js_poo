class Student {
  constructor({ name,
    email,
    username,
    twitter = null,
    instagram = null,
    facebook = null,
    aprovedCourses = [],
    learningPath = []
  }) {
    this.name = name;
    this.userName = username,
      this.email = email,
      this.socialMedia = {
        twitter,
        instagram,
        facebook
      },
      this.aprovedCourses = aprovedCourses,
      this.learningPath = learningPath
  }

  publishComment(commentContent){
    const comment = new Comment({
      message:commentContent,
      name:this.name
    })

    comment.publish();
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.aprovedCourses.push(newCourse);
    } else {
      console.warn("You can´t do this course because It is not free")
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang.toLowerCase() != "english") {
      this.aprovedCourses.push(newCourse);
    } else {
      console.warn("You can´t do this course about ENGLISH")
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.aprovedCourses.push(newCourse);
  }
}

class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = "spanish"
  }) {
    this.name = name,
      this.classes = classes,
      this.isFree = isFree,
      this.lang = lang
  }
}

class Comment{
  constructor({
    message, 
    name,
    role = "student",
    likes = 0
  }){
    this.message = message;
    this.name = name;
    this.role = role;
    this.likes = likes;
  }

  publish(){
    console.log(this.name +'('+this.role+')');
    console.log(this.likes+" likes");
    console.log(this.message);
  }
}

const comment = "Hello, it´s a great course, I like it";

const miguel = new FreeStudent({
  name:"Miguel",
  username:"miguel89",
  email:"miguel89@gmail.com",
  twitter:"miguel",
  instagram:"miguel jarro"
});

// I make a console.log using the function that I made into the class STUDENT
miguel.publishComment(comment);

const carlos = new BasicStudent({
  name:"Carlos",
  username:"carlos909",
  email:"carlos909@gmail.com",
  twitter:"carlos",
  instagram:"carlos ramon"
});

const courseHtml = new Course({
  name:"HTML course",
  isFree:false
});

const courseJava = new Course({
  name:"Java course",
  lang:"English"
});

miguel.approveCourse(courseHtml);
carlos.approveCourse(courseJava);
