// // CODE here for your Lambda Classes






// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
class Person {
    constructor(perAttr) {
        this.name = perAttr.name;
        this.age =  perAttr.age;
        this.location = perAttr.location;
    }
    speak() {return `Hello my name is ${this.name}, I am from ${this.location}`}
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
    constructor(instAttr) {
        super(instAttr);
        this.speciality = instAttr.speciality;
        this.favLanguage = instAttr.favLanguage;
        this.catchPhrase = instAttr.catchPhrase;
    }
    demo(subject) {return `Today we ar learning about ${subject}`}
    grade(student, subject) {return `${student.name} receives a perfect score on ${subject}`}
    gradeTroll(student) {return (student.grade - Math.floor((Math.random() * 100) + 1)) }
}

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
        this.grade = stuAttr.grade;
    }
    listsSubjects() {return this.favSubjects.map(subject)}
    PRAssignment(subject) {return `${this.name} has submitted a PR for ${subject}`}
    sprintChallenge(subject) {return `${this.name} has begun sprint challenge on ${subject}`}
}

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
class ProjectManager extends Instructor {
    constructor(projAttr) {
        super(projAttr);
        this.gradClassName = projAttr.gradClassName;
        this.favInstructor = projAttr.favInstructor;
    }
    standUp(channel) {console.log(`${this.name} announces to ${channel}, @channel standy times!`)}
    debugCode(student, subject) {console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)}
}

const sterlingArcher = new ProjectManager({
    name: 'Archer',
    location: 'New York',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Oh I'm sorry, I can't hear you over THE SOUND OF HOW AWESOME I AM!`
  });

const lana = new Instructor({
    name: 'Lana',
    location: 'New York',
    age: 28,
    favLanguage: 'Python',
    speciality: 'Back-end',
    catchPhrase: `Cuase that's how you get ants!`
});

const cyril = new Student({
    name: 'Cyril',
    location: 'New York',
    age: 33,
    favLanguage: 'Basic',
    speciality: 'Data Base',
    catchPhrase: `I happen to be a kickass accountant!`,
    grade: 80
});

const cheryl = new Student({
    name: 'Cheryl',
    location: 'New York',
    age: 25,
    favLanguage: 'wingdings',
    speciality: 'Turning it off and back on again',
    catchPhrase: `Where ISN'T the bathroom? Am I right?`,
    grade: 80
});


  console.log(sterlingArcher);
  sterlingArcher.standUp('Team Archer');
  console.log(lana);
  console.log(cheryl);
  console.log(cyril);

  console.log(lana.gradeTroll(cheryl));

//   * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
