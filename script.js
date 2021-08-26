const myTitle = document.querySelector('.title')
const myAuthor = document.querySelector('.author')
const myPages = document.querySelector('.pages')
const myRead = document.querySelector('.read')
const collection = document.querySelector('.book-collection')
const subBtn = document.querySelector('#submit-btn')
const addBtn = document.querySelector('.add-btn')
const popup = document.querySelector('#my-popup')
const deleteBtn = document.querySelector('#delete-btn')
const bookDiv = document.querySelector('.new-book')

let myLibrary = [{
    "title": "Test Title",
    "author": "Test Author",
    "pages": "250",
    "read": true,
    "id": 0
}];

createBookCard()

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id
}

function addBookToLibrary() {
    return myLibrary.push(new Book(myTitle.value, myAuthor.value, myPages.value, myRead.checked))
}

function toggleRead(book) {
    book.read = !book.read
    return
}

function createBookCard() {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'new-book')
    const newTitle = document.createElement('h2')
    newTitle.setAttribute('class', 'new-title')
    const newAuthor = document.createElement('p')
    const newPages = document.createElement('p')
    const newRead = document.createElement('p')
    const newDeleteBtn = document.createElement('button')
    newDeleteBtn.setAttribute('id', 'delete-btn')
    newDeleteBtn.textContent = 'Remove Book'
    newDeleteBtn.addEventListener('click', () => console.log(myLibrary[1].id))
    const changeRead = document.createElement('button')
    changeRead.setAttribute('id', 'switch')
    changeRead.textContent = 'Change Status'

    collection.appendChild(newDiv)
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newAuthor)
    newDiv.appendChild(newPages)
    newDiv.appendChild(newRead)
    newDiv.appendChild(newDeleteBtn)
    newDiv.appendChild(changeRead)

    for (let i = 0; i < myLibrary.length; i++) {
        newTitle.textContent = myLibrary[i].title
        newAuthor.textContent = 'by ' + myLibrary[i].author
        newPages.textContent = myLibrary[i].pages + ' pages'
        id=i
        if (myLibrary[i].pages === '') {
            newPages.textContent = 'Unknown Pages'
        }
        if (myLibrary[i].read == true) {
            newRead.textContent = 'Book is read'
        } else {
            newRead.textContent = 'Book is unread'
        }
    }
}

const getIndex = (title) => {
    for (let book of myLibrary) {
        if (book.title == title) {
            console.log(myLibrary.indexOf(book))
        }
    }
}

const clearInput = () => {
    myTitle.value = ''
    myAuthor.value = ''
    myPages.value = ''
    myRead.checked = false
}

const openForm = () => {
    popup.style.display = "block";
}

const closeForm = () => {
    popup.style.display = "none";
}

addBtn.addEventListener('click', function () {
    if (popup.style.display == 'block') {
        addBtn.textContent = 'Add book'
        closeForm()
    } else {
        addBtn.textContent = 'Close form'
        openForm()
    }
})

subBtn.addEventListener('click', function () {
    if ((!myTitle.value.replace(/\s/g, '').length) || (!myAuthor.value.replace(/\s/g, '').length)) {
        console.log('Please enter a title and/or author')
    } else {
        addBookToLibrary()
        createBookCard()
        clearInput()
        closeForm()
    }
})

const deleteBook = (bookIndex) => {
    myLibrary.splice(bookIndex, 1)
}

// deleteBtn.addEventListener('click', function () {
//     deleteBook()
//     console.log('test')
// })