var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
const helperFunction = (remainingTime, books) => {
    if (remainingTime > 0 && books.length > 0) {
        readBooksPromise(remainingTime, books[0]).then((time) => {
            books.shift();
            helperFunction(time, books);
        }).catch((err) => {
           console.error(err); 
        });
    }
}

helperFunction(10000, books);