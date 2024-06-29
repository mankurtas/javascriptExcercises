const sumAll = function(num1,num2) {

    let sumTotal = 0;

    if(Number.isInteger(num1) && Number.isInteger(num2) && num1 > -1 && num2 > -1) {
        if(num1>num2){

            for (let i = num2; i < num1+1; i++){
                
                sumTotal +=i;
            }

        }else{
            for (let i = num1; i < num2+1; i++){
                
                sumTotal +=i;
            }
        }


    return sumTotal

    }

    else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
