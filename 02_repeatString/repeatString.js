function repeatString(string, numRepetition) {

    var newString = '';


    if (numRepetition < 0) {
        return 'ERROR';
    } 
    
    else if (numRepetition === 0) {
        return '';
    }   
    
    else {
      for (let i = 0; i < numRepetition; i++) {
            newString += string;
        }
    return newString;
    }         
    
}


// Do not edit below this line
module.exports = repeatString;
