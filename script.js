// const myTitle = document.querySelector('.title').value
// const myAuthor = document.querySelector('.author').value
// const myPages = document.querySelector('.pages').value
// const myRead = document.querySelector('.read').checked
const collection = document.querySelector('.book-collection')

const subBtn = document.querySelector('#submit-btn')

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}


function addBookToLibrary() {
  title = document.querySelector('.title').value
  author = document.querySelector('.author').value
  pages = document.querySelector('.pages').value
  read = document.querySelector('.read').checked

  let newBook = new Book(title, author, pages, read)

  myLibrary.push(newBook)
  console.log(newBook)
}


subBtn.addEventListener('click', function () {
  addBookToLibrary()
  console.log(myLibrary)
})
