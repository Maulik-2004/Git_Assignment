// Assignment 1: BMI Comparison

let sureshmass = 65
let sureshheight = 1.75

let rameshmass = 85
let rameshheight = 1.80

let sureshBMI = sureshmass / (sureshheight * sureshheight);
let rameshBMI = rameshmass / (rameshheight * rameshheight);

let markhigherBMI = sureshBMI > rameshBMI;

console.log("sureshBMI", sureshBMI);
console.log("rameshBMI", rameshBMI);
console.log("markhigherBMI:" ,sureshBMI, rameshBMI, markhigherBMI);