const getTheTitles = function(myArray) { 
    return myArray.map((books) => books.title);
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  getTheTitles(books)
// Do not edit below this line
module.exports = getTheTitles;
