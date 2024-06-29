const add = function(...arg) {
	let sum =0;
  arg.forEach((item) => sum += item)

  return sum
};

const subtract = function(...arg) {
	let substraction =arg[0];
  arg.slice(1).forEach((item) => substraction -= item)

  return substraction

}

const sum = function(...arg) {
	let sum =0;
  arg.forEach((item) =>  item.forEach(i => sum+=i))
                        
  return sum
};

const multiply = function(...arg) {
  let multiplied =1;
  arg.forEach((item) =>  item.forEach(i => multiplied *=i))
                        
  return multiplied
};

const power = function(...arg) {
  return arg[0]** arg[1]
};

const factorial = function(...arg) {
  let fact = 1;
  if(arg !==0){
    for (i = 1; i <= arg; i++) {
      fact *= i;
  }
  }
  

  return fact

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
