const convertToCelsius = function(celciusTemp) {
  
  let fahrenheit = (celciusTemp-32)*0.5556;
  if (fahrenheit===0){
    return fahrenheit;
  } else {
    return Math.round( fahrenheit * 1e1 ) / 1e1
  }
  
};

const convertToFahrenheit = function(fahrenheitTemp) {
  let celsius = (fahrenheitTemp*(9/5))+32;
  return Math.round(celsius * 1e1 ) / 1e1;
};
convertToCelsius(-100) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
