const myTitle = document.querySelector('.new-title')
const myAuthor = document.querySelector('.new-author')
const myPages = document.querySelector('.new-pages')
const myRead = document.querySelector('.new-read')
const collection = document.querySelector('.book-collection')
const subBtn = document.querySelector('#submit-btn')

let books = 0
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(newBook) {
    let title = document.querySelector('.title').value
    let author = document.querySelector('.author').value
    let pages = document.querySelector('.pages').value
    let read = document.querySelector('.read').checked

    newBook = new Book(title, author, pages, read)
    myLibrary.unshift(newBook)
    books++
}

function identifyBook (){
    myTitle.textContent= myLibrary[0].title
    myAuthor.textContent=myLibrary[0].author
    myPages.textContent=myLibrary[0].pages
    myRead.textContent=myLibrary[0].pages
}

subBtn.addEventListener('click', function () {
    addBookToLibrary()
    identifyBook()
    console.log(myLibrary)
    console.log(books);
})

// first, make sure there is a div that will be the container for all books on the bookshelf

// make identifyBook() create a div (will be the 'book') and create <p> inside the div to house text content for title, author, pages, read 

// the div book can be a set height and width. the container can have padding or whatever