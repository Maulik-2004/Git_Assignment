 //5: Dynamic Number Processor

 const numbers=[11,12,13,14,15,16];

 const result=numbers.reduce((acc,num)=>{
    if (num % 2 ===0){
        acc.evenNumbers.push(num);
        acc.evenSum+=num;
    }else {
        acc.oddNumbers.push(num);
        acc.oddSum +=num;
    }
    return acc;
 },
 {
  evenNumbers: [],
  oddNumbers: [],
  evenSum: 0,
  oddSum: 0
});

 console.log(result);
      