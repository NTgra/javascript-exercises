const findTheOldest = function(people) {
    
    const theOldest = people.sort(function(a,b){
        if (typeof a.yearOfDeath === 'undefined'){
            a.yearOfDeath = new Date().getFullYear();
        }
        if (typeof b.yearOfDeath === 'undefined'){
            b.yearOfDeath = new Date().getFullYear();
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    })
   return theOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
