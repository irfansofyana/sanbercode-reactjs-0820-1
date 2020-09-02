var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

const helperFunction = (remainingTime, books) => {
    if (remainingTime > 0) {
        readBooks(remainingTime, books[0], function callback(time) {
            books.shift();
            helperFunction(time, books);
        });
    } 
}

helperFunction(10000, books);