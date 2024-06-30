const palindromes = function (text) {

    let lowerCaseText = text.toLowerCase()

    let textArray = lowerCaseText.split('')

    // let lettersArray = []

    // tesxArray.forEach((item) => {
    //     if(item !==" " || item !=="," || item !==".") {
    //         lettersArray.push(item)
    //     }
    // });

    textArray.forEach((item, index) => {
        if(item === "," || item === "." || item ==="!"){
            textArray.splice(index,1)
        }
    });

    textArray = textArray.filter(item => item !==" ")

    let reversedArray = []

    textArray.forEach(item => reversedArray.unshift(item))

//    let reversedArray = tesxArray.reverse()

    return textArray.join("") === reversedArray.join("")

};

// Do not edit below this line
module.exports = palindromes;
