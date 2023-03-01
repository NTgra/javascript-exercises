const fibonacci = function(theNumber) {
    let myArray = [0,1,1]
    
    if(+theNumber<0){
        return "OOPS";
    }
    if (+theNumber===0){
        return 0;
    }
    if (+theNumber===1){
        return 1;
    }
    if (+theNumber>1){
        let i=myArray.length;
        for(let j=i; j<+theNumber; j++){
            myArray.push(myArray[j-1]+myArray[j-2])
        }
        return myArray[+theNumber-1]+myArray[+theNumber-2] 
    }    
};

// Do not edit below this line
module.exports = fibonacci;


