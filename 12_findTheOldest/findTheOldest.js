const findTheOldest = function(arr) {

    let oldessPersonName = arr.reduce((oldest, current) =>{

        let yearOfDeath = new Date().getFullYear();
        let yearOfBirth = current.yearOfBirth

        if(current.hasOwnProperty('yearOfDeath')){
             yearOfDeath = current.yearOfDeath
        }

        let currentAge = yearOfDeath - yearOfBirth

        let yearOfDeathOldest = new Date().getFullYear();
        let yearOfBirthOldest = oldest.yearOfBirth
        if(oldest.hasOwnProperty('yearOfDeath')){
             yearOfDeathOldest = oldest.yearOfDeath
        }
        let oldestAge = yearOfDeathOldest - yearOfBirthOldest

        return currentAge > oldestAge ? current : oldest

    }, arr[0])

    return oldessPersonName
}

// Do not edit below this line
module.exports = findTheOldest;
