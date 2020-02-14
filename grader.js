//Readline module
const readline = require("readline");
const read = readline.createInterface({
  //Listen to Standerd input/readable stream
  input: process.stdin,
  output: process.stdout
});

//Ask user for their name
read.question("What is your name? ", function(name) {
  read.question("What is the name for the assignment? ", function(assig) {
    read.question(
      "Type the grade number received for the assignment: ",
      function(gradestr) {
        //Pass the grade number as one of the property of the Grader class
        g = new Grader(gradestr);

        //call the method inside the Grader to run and calculate the grade
        g.LetterGrade();

        //log the letter grade
        console.log(
          "Hi, " +
            name +
            "! Your grade letter for the " +
            assig +
            " assignment is: " +
            g.gradeLetter +
            "."
        );
      }
    );
  });
});

class Grader {
    constructor(grade){
        this.grade = grade
    }
    LetterGrade(){

             this.grade = parseInt(this.grade)

            if (this.grade >= 90){
                this.gradeLetter = "A"
            }

            else if (this.grade >= 80 && this.grade <= 89){
                this.gradeLetter = "B"
            }
            else if (this.grade >= 70 && this.grade <= 79){
                this.gradeLetter = "C"
            }
            
            else if (this.grade >= 60 && this.grade <= 69){
                this.gradeLetter = "D"
            }
            
            else if (this.grade < 60 && this.grade >=0){
                this.gradeLetter = "F"
            }
            else{
                console.error(
                  "Error: Invalid grade number entered. Unable to generate a letter grade."
                );
            }
        
    }
}