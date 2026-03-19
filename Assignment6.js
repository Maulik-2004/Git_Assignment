//Assignment 6: Grade Evaluation System


function evaluateGrade(marks) {
      if (marks <0 || marks > 100) {
        console.log("Invalid marks entered");
    }
      else if (marks >= 90) {
        console.log("Your Grade is A");
    } else if (marks >= 75 && marks < 89) {
        console.log("Your Grade is B");
    } else if (marks >= 50 && marks < 74) {
        console.log("Your Grade is C");
    } else if (marks < 50){
        console.log("You are Fail in exam ");
    }       
      else  {
        console.log("Invalid input");
    }
    }
    
    evaluateGrade(45);
