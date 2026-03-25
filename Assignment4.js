//Assignment 4: Number Analyzer Tool

function numbers(number) {
    if (number<0) {
        console.log("The number is negative");
    }   else if (number > 0) {
        console.log("The number is positive");
    }  else  {
        console.log("The number is zero");
    }
    
     if (number % 2 === 0 ) {
    console.log("The number is even");
    } else   {
    console.log("The number is odd");
    }
    }
 numbers(-5);