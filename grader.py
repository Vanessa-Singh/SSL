import sys


name = raw_input("What is your name? ")

assig = raw_input("What is the name for the assignment? ")

gradestr = raw_input("Type the grade number received for the assignment: ")

class Grader:
    def __init__(self, grade):
        self.grade = grade
        self.gradeLetter = "N/A"

    #Method to return a valid grade
    def LetterGrade(self):
        try:
            self.grade = int(self.grade)

            if self.grade >= 90:
                self.gradeLetter = "A"

            elif self.grade >= 80 and self.grade <= 89:
                self.gradeLetter = "B"
        
            elif self.grade >= 70 and self.grade <= 79:
                self.gradeLetter = "C"
            
            elif self.grade >= 60 and self.grade <= 69:
                self.gradeLetter = "D"
            
            elif self.grade < 60 and self.grade >=0:
                self.gradeLetter = "F"
        #catch and display the error if the value for grade is invalid.
        except ValueError: 
            print("Error: Invalid grade number entered. Unable to generate a letter grade.")
            

#Pass the grade number as one of the property of the Grader class
g = Grader(gradestr)

#call the method inside the Grader to run and calculate the grade
g.LetterGrade()

#Print the letter grade
print("Hi, " + name + "! Your grade letter for the " + assig + " assignment is: " + g.gradeLetter + ".")
