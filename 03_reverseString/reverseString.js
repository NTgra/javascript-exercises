const reverseString = function(word) {

    let outputString='';

    for (let i=1; i<=word.length;i++){
        outputString+=word.at(-i)
    }

    return outputString;
};
reverseString('hello there') // returns 'ereht olleh'
                                           

// Do not edit below this line
module.exports = reverseString;
