const palindromes = function palindrome(array) {

    let newArray = array
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")  
        .toLowerCase()                              
        .replace(/\s/g, '')                          
        .split("");                                  
    
    newArray = newArray.map(function(item) {
      return item.trim();                            
    });
    
        
    for (let i = 0; i < newArray.length/2; i++) {
    
        for (let j = newArray.length - 1 - i; j >= 0 ; j--) {
    
            console.log(newArray[i])
            console.log(newArray[j])
            if (newArray[i] !== newArray[j]) {
                return false;
            }
    
            break;
    
        }
    
    } 
    return true;
    
    
    };

// Do not edit below this line
module.exports = palindromes;
