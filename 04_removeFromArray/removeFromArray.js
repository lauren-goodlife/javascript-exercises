function removeFromArray(array, ...valuesToRemove) {


    for (let i = array.length - 1; i >= 0; i--) {


        for (let j = 0; j < valuesToRemove.length; j++) {
            
            

            if (array[i] === valuesToRemove[j]) {
                array.splice(i, 1)
            }
            
        }

        
    }
return array;    

}

console.log(removeFromArray([1,2,"1","hey","ho"],1,2,"hey"))



// Do not edit below this line
module.exports = removeFromArray;


