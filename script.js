//-------------------------
// VARIABLES FOR BUTTONS
//-------------------------

const startButton = document.querySelector('.top-buttons.button1');

const nextButton = document.querySelector('.top-buttons.button3');

const endButton = document.querySelector('.top-buttons.button2')

const submitButton = document.querySelector('.submit');

// const inputEl = document.querySelector('input');
const answerEl = document.getElementById('answer');


//-------------------------
// VARIABLES FOR PROMPTS
//-------------------------

const teacherPrompt = document.getElementById('teachers-text');

const studentPrompt = document.getElementById('students-text');

const middlePrompt = document.getElementById('middle-text');


//-------------------------
// CODES FOR INPUTS
//-------------------------

const questions1 = ["Where is the United States located?", "What number comes after 109?", "Ten cents plus five cents equals how much?", "How many syllables are in the word elephant?", "Are dinosaurs still living or extinct?"];

const answers1 = ["North America", 110, "Fifteen cents", 3, "extinct"]


//-------------------------
// CODES FOR BUTTON FUNCTIONS
//-------------------------



function startGame() {
    teacherPrompt.innerHTML = questions1[0];
    studentPrompt.innerHTML = "Can you help me out?"
}

function nextRound() {
    // if (questions1[1] === 110) {
    //     return middlePrompt.innerHTML = "That's Correct!";
    // } else if (questions1[2] == "Fifteen cents") {
    //     return middlePrompt.innerHTML = "One step closer to saving summer vacation!";
    // } else if (questions1[3] === 3) {
    //     return middlePrompt.innerHTML = "You're a smart kid!"
    // } else if (questions1[4] == answers1[4]) {
    //     return middlePrompt.innerHTML = "You got this!";
    // } else {
    //     return middlePrompt.innerHTML = "Wrong answer. Try again!"
    // }
}

function endGame() {
    teacherPrompt.innerHTML = "Game Over. Thank you for playing Teacher Takeover! Come back next time!";
    studentPrompt.innerHTML = "Thanks for all of your help! Can't wait to play with you again!";
    middlePrompt.innerHTML = "";
}

// function youWin() {
//     if 
// }

function check() {
    if (questions1[0] && answers1[0] == answerEl.value) {
        return middlePrompt.innerHTML = "Great Job! Move on to the next round!";
    } else if (questions1[1] && answers1[1] == answerEl.value) {
        return middlePrompt.innerHTML = "That's Correct! Move on to the next round!";
    } else if (questions1[2] && answers1[2] == answerEl.value) {
        return middlePrompt.innerHTML = "One step closer to saving summer vacation! Move on to the next round!";
    } else if (questions1[3] && answers1[3] == answerEl.value) {
        return middlePrompt.innerHTML = "You're a smart kid! Move on to the next round!"
    } else if (questions1[4] && answers1[4] == answerEl.value) {
        return middlePrompt.innerHTML = "You got this! Move on to the next round!";
    } else {
        return middlePrompt.innerHTML = "Wrong answer. Try again!";
    }
}



//-------------------------
// CODE FOR CLASSES
//-------------------------


class Person {
  constructor(name, subject, assignment, firepower, willpower, damage, energy) {
    this.name = name;
    this.subject = subject,
    this.assignment = assignment,
    this.firepower = firepower,
    this.willpower = willpower,
    this.damage = damage,
    this.energy = energy
  }
}

class Student extends Person {
  constructor(name, firepower, energy, damage) {
    super(name, firepower, energy, damage);
    this.name = "Hero Kid",
    this.firepower = 10,
    this.energy = 100
  }

  attackTeacher(target) {
    let randomNum = Math.random();
    if (randomNum <= this.damage) {
      target.damage -= this.willpower;
      window.alert(`Yes! I destroyed the ${this.assignment}!`);
    }
  }

  regenerate() {  //restores student health/energy
    let randomNum = Math.random()
    window.alert(`Just ate lunch and now my energy is at ${this.energy}%!`)
  }


}

class Teacher extends Person {
  constructor(subject, assignment, firepower, willpower, damage) {
    super(subject, assignment, firepower, willpower, damage)
    this.subject = subject,
    this.assignment = assignment,  //the type of assignment
    this.firepower = (Math.floor(Math.random() * 4) + 3),  //the damage amount of the assignment
    this.willpower = (Math.floor(Math.random() * 4) + 3), //the "health" level of the teacher or how many rounds they can withstand
    this.damage = damage  //the damage amount that the teacher takes on
  }

  clockOut() {  // defeated method
    let randomNum = Math.random()
    if (this.willpower === 0) {        
        window.alert(`My will power is at ${this.willpower}%. I'm exhausted, time to clock out for the day!`);
    }
  }

  assignWork() {  //attack method
    let randomNum = Math.random()
    if (randomNum < this.damage) {
        target.energy -= this.firepower
        window.alert(`Alert! I'm assigning ${this.assignment} for more work!`);
    }
  }
}

const homeroom = new Teacher("Homeroom Teacher", "pop quiz", 15, 30, 10);
const art = new Teacher("Art Teacher", "project", 5, 20, 10);
const PE = new Teacher("PE Teacher", "exercise", 20, 40, 10);
const music = new Teacher("Music Teacher", "busy work", 10, 20, 10);


