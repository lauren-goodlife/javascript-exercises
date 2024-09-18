function reverseString(string) {

    var splittedString = string.split("");
    var reverseString = ''

    for (let i = (splittedString.length - 1); i >= 0; i--) {
        reverseString += splittedString[i];
    }

    return reverseString;              

}

console.log(reverseString(''))

// Do not edit below this line
module.exports = reverseString;
