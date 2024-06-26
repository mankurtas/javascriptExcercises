const repeatString = function(string, num) {
    let output = string;

    if (num ==0){
        return ""
    }
    if (num < 0) {
        return "ERROR"
    } else {
        while(num !=0, --num){
            output +=string
        }
        return output
    }
    
};

// Do not edit below this line
module.exports = repeatString;
