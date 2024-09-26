function sumAll(valoreInizio,valoreFine){


    if ((Number.isInteger(valoreInizio)) && (Number.isInteger(valoreFine)))
        
        {
    
            if (valoreInizio > 0 && valoreFine > 0) {
                
                let sum = 0;
        
                for (let i = Math.min(valoreInizio,valoreFine); i <= Math.max(valoreInizio,valoreFine); i++)
                    
                {
        
                sum += i;
        
                }
        
                return sum;
        
            } else {
    
                return 'ERROR';
            
                }
    
        } else {

            return 'ERROR';
        }
        
    } 
    
    console.log(sumAll(1,[1,3]))

// Do not edit below this line
module.exports = sumAll;
