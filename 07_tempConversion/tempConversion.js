function convertToCelsius(tempInFahrenheit){

  if (tempInFahrenheit === 32) {
      return 0;
  }

  var tempInCelsius = ((tempInFahrenheit - 32) * (5/9));
  var roundedTempInCelsius = Number(tempInCelsius.toFixed(1));
  return roundedTempInCelsius;

}



function convertToFahrenheit(tempInCelsius){

  if (tempInCelsius === 0) {
      return 32;
  }
  
  var tempInFahrenheit = (tempInCelsius * (9/5) + 32)
  var roundedTempInFahrenheit = Number(tempInFahrenheit.toFixed(1));
  return roundedTempInFahrenheit;
  
  }

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
