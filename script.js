const myTitle = document.querySelector('.title')
const myAuthor = document.querySelector('.author')
const myPages = document.querySelector('.pages')
const myRead = document.querySelector('.read')
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

function createBook() {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'new-book')
    newDiv.style.border = '5px solid black'
    newDiv.style.backgroundColor = 'brown'
    newDiv.style.margin = '5px'
    newDiv.style.height = '175px'
    newDiv.style.width = '125px'
    // newDiv.style.
    // newDiv.style.
    const newTitle = document.createElement('p')
    newTitle.setAttribute('class', 'new-title')
    const newAuthor = document.createElement('p')
    newAuthor.setAttribute('class', 'new-author')
    const newPages = document.createElement('p')
    newPages.setAttribute('class', 'new-pages')
    const newRead = document.createElement('p')
    newRead.setAttribute('class', 'new-read')

    collection.appendChild(newDiv)
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newAuthor)
    newDiv.appendChild(newPages)
    newDiv.appendChild(newRead)

    newTitle.textContent = myLibrary[0].title
    newAuthor.textContent = myLibrary[0].author
    newPages.textContent = myLibrary[0].pages

    if (myLibrary[0].read == true) {
        newRead.textContent = 'Book is read'
    } else {
        newRead.textContent = 'Book is unread'
    }
}

const clearInput = () => {
    myTitle.value = ''
    myAuthor.value = ''
    myPages.value = ''
    myRead.checked = false
}

subBtn.addEventListener('click', function () {
    if ((myTitle.value == '') || (myAuthor.value == '')) {
        alert('Please enter a title and/or an author')
    } else {
        addBookToLibrary()
        createBook()
        clearInput()
        console.log(books);
    }
})

// first, make sure there is a div that will be the container for all books on the bookshelf

// make createBook() create a div (will be the 'book') and create <p> inside the div to house text content for title, author, pages, read 

// the div book can be a set height and width. the container can have padding or whatever