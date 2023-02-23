const leapYears = function(year) {
    if(year%4===0&&year%100===0){
        if (year%400===0){
            return true;
        }
        return false;
    }
    if (year%4===0||year%400===0){
        return true
    } else return false;
};
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
leapYears(1996)
// Do not edit below this line
module.exports = leapYears;
