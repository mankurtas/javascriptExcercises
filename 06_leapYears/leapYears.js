const leapYears = function(years) {
    
let isLeaYear = true;

      if ((years%100 !=0 && years %4 ==0) || (years%400 ==0) ){
        isLeaYear = true
      }  

      else {
        isLeaYear =false
      }

return isLeaYear

};

// Do not edit below this line
module.exports = leapYears;
