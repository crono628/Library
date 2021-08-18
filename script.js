// const myTitle = document.querySelector('.title')
// const myAuthor = document.querySelector('.author')
// const myPages = document.querySelector('.pages')
// const myFinished = document.querySelector('.finished')
// const collection = document.querySelector('.book-collection')

const subBtn = document.querySelector('.submit-btn')

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author 
    this.pages = pages 
    this.read = read
}

let newBook = new Book()

function addBookToLibrary(title, author, pages, read) {
    title = newBook.title
    author = newBook.author
    pages = newBook.pages
    read = newBook.read
    newBook.title = form.title.value
    newBook.author = form.author.value
    newBook.pages = form.pages.value
    newBook.read = form.read.value
}

console.log(addBookToLibrary(title, author, pages, read));

subBtn.addEventListener('click', () => {
    addBookToLibrary().push(myLibrary)
    console.log(myLibrary);
    console.log('testing');
});

