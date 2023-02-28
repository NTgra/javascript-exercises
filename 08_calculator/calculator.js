const add = function(first, second) {
  return parseInt(first)+parseInt(second);
};

const subtract = function(first,second) {
	return parseInt(first)-parseInt(second);
};

const sum = function(myArray) {
	return myArray.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function(myArray) {
  return myArray.reduce((product, a) => product * a, 1);
};

const power = function(number, power) {
	return Math.pow(number,power);
};

const factorial = function(number) {
	if (number===0||number===1){
    return 1;
  }
  if (number>1){
    let factorial=number;
    for (let i=number-1;i>0;i--){
      factorial*=i;
    }
    return factorial;
  }
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
