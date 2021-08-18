// const myTitle = document.querySelector('.title')
// const myAuthor = document.querySelector('.author')
// const myPages = document.querySelector('.pages')
// const myFinished = document.querySelector('.finished')
// const collection = document.querySelector('.book-collection')
const subBtn = document.querySelector('.submit-btn')

let myLibrary = [];

function Book() {
    this.title = ''
    this.author = ''
    this.pages = ''
    this.read = ''
}

function addBookToLibrary() {
    newBook = new Book()
    newBook.title = form.title.value
    newBook.author = form.author.value
    newBook.pages = form.pages.value
    newBook.read = form.read.value
    newBook.push(myLibrary)
    console.log(myLibrary);
    
}
console.log('test')

subBtn.onclick = () => addBookToLibrary();
