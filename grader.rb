puts "What is your name? "
name = gets

puts "What is the name for the assignment? "
assig = gets

puts "Type the grade number received for the assignment: "
gradestr = gets

class Grader
    def initialize(grade)
        @grade = grade
        @gradeLetter = "N/A"
    end

    def get_gradeLetter
        @gradeLetter
    end

    def LetterGrade
        begin
            @grade = Integer(@grade)

            if @grade >= 90
                @gradeLetter = "A"

            elsif @grade >= 80 and @grade <= 89
                @gradeLetter = "B"
        
            elsif @grade >= 70 and @grade <= 79
                @gradeLetter = "C"
            
            elsif @grade >= 60 and @grade <= 69
                @gradeLetter = "D"
            
            elsif @grade < 60 and @grade >=0
                @gradeLetter = "F"
            
            end 
            #catch and display the error if the value for grade is invalid.
            rescue 
                puts "Error: Invalid grade number entered. Unable to generate a letter grade."
        end
        
    end
end


#Pass the grade number as one of the property of the Grader class
g = Grader.new(gradestr)
#call the method inside the Grader to run and calculate the grade
g.LetterGrade()

#Put the letter grade
puts "Hi, " + name + " Your grade letter for the " + assig + " assignment is: " + g.get_gradeLetter +  "."
