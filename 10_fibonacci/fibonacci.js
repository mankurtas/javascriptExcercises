const fibonacci = function(num) {
    let fibonacciArray = []
    if(num == 0) {
        fibonacciArray = [0]
        return fibonacciArray[0]
    } 
    
    
    else if (num < 0) {
        return "OOPS"
    }
   else{
    let firstIteme = 1
    // const fibonacciArray = []
    fibonacciArray.push(firstIteme)
    fibonacciArray.push(firstIteme)
    
    for (let index = 2; index < num; index++) {

      

        fibonacciArray.push(fibonacciArray[index-2] + fibonacciArray[index-1])


    }
   
    return fibonacciArray[fibonacciArray.length - 1]
   }


};

// Do not edit below this line
module.exports = fibonacci;
