const sumAll = function(first, second) {
    let theSum = 0;
    if(first<0||second<0){
        return "ERROR";
    }
    if(!Number.isInteger(first) || !Number.isInteger(second)){
        return "ERROR";
    }
    if(first>second){
        let start=second;
        let end=first;
        for(let i=start; i<=end; i++){
            theSum+=i;
        }
    } else {
        let start=first;
        let end = second;
        for(let i=start; i<=end; i++){
            theSum+=i;
        }
    }
    
    return theSum;
};
sumAll(123, 1)

// Do not edit below this line
module.exports = sumAll;
