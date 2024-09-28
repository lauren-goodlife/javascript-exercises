
let add = (num1, num2) => num1+num2;

let subtract = (num1, num2) => num1 - num2;

const sum = function(array) {

  if (array.length === 0) {
    return 0;
  }
  
  if (array.length === 1) {
    return Number(array[0]);
  }

  if(array.length > 1){

  let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
      totalSum += Number(array[i]);
    }
    return totalSum;
    } 
  };
  
const multiply = function(array) {

      if (array.length === 0) {
        return 0;
      }
      
      if (array.length === 1) {
        return Number(array[0]);
      }
    
      if(array.length > 1){
    
      let totalMultiplication = 1;
        for (let i = 0; i < array.length; i++) {
          totalMultiplication = totalMultiplication * Number(array[i]);
        }
        return totalMultiplication;
        } 
      };



const power = function(baseNumber,esponentNumber) {
    
      let totalPower = 1;
        for (let i = 1; i <= esponentNumber; i++) {
          totalPower = totalPower * baseNumber;
        }
        return totalPower;
        } 

const factorial = function(numberToFactorize) {

if (numberToFactorize == 0 || numberToFactorize == 1) {
  return 1;  
}

let totalFactorial = 1;
for (let i = numberToFactorize; i > 0; i--){
  totalFactorial = totalFactorial * i;
}
return totalFactorial;

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
