const reverseString = function(text) {
    const reversedStringtextArray = [];
    
    for (i=text.length; i>-1; i--){
        reversedStringtextArray.push(text[i])
    }

   
    return reversedStringtextArray.join('')


};

// Do not edit below this line
module.exports = reverseString;
