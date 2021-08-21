const myTitle = document.querySelector('.title')
const myAuthor = document.querySelector('.author')
const myPages = document.querySelector('.pages')
const myRead = document.querySelector('.read')
const collection = document.querySelector('.book-collection')
const subBtn = document.querySelector('#submit-btn')
const addBtn = document.querySelector('.add-btn')
const popup = document.querySelector('#my-popup')
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
}

function createBook() {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'new-book')
    newDiv.style.border = '5px solid black'
    newDiv.style.backgroundColor = 'saddlebrown'
    newDiv.style.margin = '10px'
    newDiv.style.height = '200px'
    newDiv.style.width = '150px'
    newDiv.style.color = 'white'
    newDiv.style.borderRadius = '10px'
    newDiv.style.paddingLeft = '5px'
    const newTitle = document.createElement('p')
    newTitle.setAttribute('class', 'new-title')
    const newAuthor = document.createElement('p')
    newAuthor.setAttribute('class', 'new-author')
    const newPages = document.createElement('p')
    newPages.setAttribute('class', 'new-pages')
    const newRead = document.createElement('p')
    newRead.setAttribute('class', 'new-read')
    const newDeleteBtn = document.createElement('button')
    newDeleteBtn.setAttribute('id', 'delete-btn')
    newDeleteBtn.textContent = 'X'
    newDeleteBtn.style.backgroundColor = 'darkred'
    const toggleBtn = document.createElement('input')
    // toggleBtn.setAttribute('id', 'toggle-btn')
    // toggleBtn.setAttribute('type', 'checkbox')
    // toggleBtn.setAttribute('class', 'slider')
    // toggleBtn.setAttribute('display', 'inline-block')

    collection.appendChild(newDiv)
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newAuthor)
    newDiv.appendChild(newPages)
    newDiv.appendChild(newRead)
    newDiv.appendChild(newDeleteBtn)
    newDiv.appendChild(toggleBtn)

    newDeleteBtn.addEventListener('click', function () {
        deleteBook(myLibrary, collection.removeChild(newDiv))
    })

    newTitle.textContent = myLibrary[0].title
    newAuthor.textContent = myLibrary[0].author
    newPages.textContent = myLibrary[0].pages

    if (myLibrary[0].title == '') {
        newTitle.textContent = 'Unknown Title'
    }

    if (myLibrary[0].author === '') {
        newAuthor.textContent = 'Unknown Author'
    }

    if (myLibrary[0].pages === '') {
        newPages.textContent = 'Unknown Pages'
    }

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

function openForm() {
    popup.style.display = "block";
}

function closeForm() {
    popup.style.display = "none";
}

addBtn.addEventListener('click', function () {
    openForm()
})

subBtn.addEventListener('click', function () {
    if ((!myTitle.value.replace(/\s/g, '').length) || (!myAuthor.value.replace(/\s/g, '').length)) {
        console.log('Please enter a title and/or author')
    } else {
        addBookToLibrary()
        createBook()
        clearInput()
        closeForm()
    }
})

function deleteBook(arr, book) {
    if (arr.indexOf(book) >= 0) {
        arr.splice(arr.indexOf(book), 1)
    }
    return arr
}