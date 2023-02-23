const removeFromArray = function(array, ...args) {    
   const newArray = [];
   array.forEach(element => {
        if(!args.includes(element)){
            newArray.push(element);
        }
   });
   console.log(newArray) 
   return newArray;
};
removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
