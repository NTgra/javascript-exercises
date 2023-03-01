const palindromes = function (value) {
    let caseInsensetive = value.toUpperCase();
    let str = caseInsensetive.replace(/\s|,|\.|!/gi, '');
    let i=str.length-1;
    let matchesNeeded=i/2;
    let matches = 0;
    
    for (let j=0; j<i/2; j++){
        if(str[j]===str[i-j]){
            matches++;         
        }
    }
    if (matches>=matchesNeeded){ 
        return true;
    }
    else {  
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
