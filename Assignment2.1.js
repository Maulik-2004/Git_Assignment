//1: Student Report System

//Array of student list with marks;
const students= [
      {name:'maulik',marks:[75,56,68]},
      {name:'preet',marks:[70,52,66]},
      {name:'mihir',marks:[55,60,72]}
]
 
//Result using map;
const Result=students.map(student=>{
    const total=student.marks.reduce((sum,marks)=>sum+marks,0);
    const avg=total / student.marks.length;

//Conditions;
let status;
    if (avg>75){
        status="Distinction"
   }else if(avg>50){
        status="Pass"
   }else {
        status="Fail"
   }
    
   //return object;
   return{
    ...student,average:avg,result:status
   }
   });
   console.log(Result);