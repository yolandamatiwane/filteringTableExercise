// Array
const books = [  {    title: "The Great Gatsby",    author: "F. Scott Fitzgerald",    year: 1925,    genre: "Literary Fiction",    pages: 180,    publisher: "Charles Scribner's Sons",    isbn: "978-0743273565"  },  {    title: "To Kill a Mockingbird",    author: "Harper Lee",    year: 1960,    genre: "Southern Gothic",    pages: 281,    publisher: "J. B. Lippincott & Co.",    isbn: "978-0446310789"  },  {    title: "1984",    author: "George Orwell",    year: 1949,    genre: "Dystopian Fiction",    pages: 328,    publisher: "Secker & Warburg",    isbn: "978-0451524935"  },  {    title: "Pride and Prejudice",    author: "Jane Austen",    year: 1813,    genre: "Romance",    pages: 279,    publisher: "Thomas Egerton",    isbn: "978-0141439513"  },  {    title: "The Catcher in the Rye",    author: "J.D. Salinger",    year: 1951,    genre: "Coming-of-age Fiction",    pages: 214,    publisher: "Little, Brown and Company",    isbn: "978-0316769488"  }];

let tbody = document.querySelector('tbody')
let btn = document.querySelector('button')
let inp = document.querySelector('#Search')
books.map(addToTable)
function addToTable(item){
    tbody.innerHTML += `
                        <tr>
                            <td>${item.title}</td>
                            <td>${item.author}</td>
                            <td>${item.year}</td>
                            <td>${item.genre}</td>
                            <td>${item.pages}</td>
                            <td>${item.publisher}</td>
                            <td>${item.isbn}</td>
                        </tr>
                        ` 
}
// || inp.value == `${book.author}`||inp.value == `${book.year}`||inp.value == `${book.genre}`||inp.value == `${book.pages}`||inp.value == `${book.publisher}`||inp.value == `${book.isbn}`
btn.addEventListener('click',()=>{

   books.forEach(book => {
   });
})







// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr)