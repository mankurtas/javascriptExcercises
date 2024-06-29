const removeFromArray = function() {
    let modifiedArray = arguments[0]
    let argumentsLength = arguments.length
    
    let withoutDublicates = modifiedArray.filter((item, index) => modifiedArray.indexOf(item) === index)
    
    for (let i = 1; i < argumentsLength; i++){
        let founded =  withoutDublicates.find((x) => x === arguments[i])

        if(founded){
          withoutDublicates.splice(withoutDublicates.indexOf(founded),1)
        }
    }

   
    return withoutDublicates
}

// Do not edit below this line
module.exports = removeFromArray;
