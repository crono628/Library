const myTitle = document.querySelector('.title')
const myAuthor = document.querySelector('.author')
const myPages = document.querySelector('.pages')
const myRead = document.querySelector('.read')
const collection = document.querySelector('.book-collection')
const subBtn = document.querySelector('#submit-btn')
const addBtn = document.querySelector('.add-btn')
const popup = document.querySelector('#my-popup')
let myLibrary = [{
    "title": "sdf",
    "author": "sdf",
    "pages": "",
    "read": true
}];
createBook()

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

    const btnDiv = document.createElement('div')
    btnDiv.setAttribute('class', 'btn-div')
    btnDiv.style.display = 'flex'
    btnDiv.style.justifyContent = 'space-between'
    btnDiv.style.padding = '10px'

    const newDeleteBtn = document.createElement('button')
    newDeleteBtn.setAttribute('id', 'delete-btn')
    newDeleteBtn.textContent = 'Remove Book'
    newDeleteBtn.style.backgroundColor = 'darkred'
    newDeleteBtn.style.color = 'white'
    newDeleteBtn.style.fontSize = '11px'

    const changeRead = document.createElement('button')
    changeRead.setAttribute('id', 'switch')
    changeRead.textContent = 'Change Status'
    changeRead.style.fontSize = '11px'

    collection.appendChild(newDiv)
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newAuthor)
    newDiv.appendChild(newPages)
    newDiv.appendChild(newRead)
    newDiv.appendChild(btnDiv)
    btnDiv.appendChild(newDeleteBtn)
    btnDiv.appendChild(changeRead)

    newDeleteBtn.addEventListener('click', function () {
        deleteBook(myLibrary, collection.removeChild(newDiv))
    })

    changeRead.addEventListener('click', function () {
        changeReadStatus(newRead.read)
        console.log(myLibrary[0])
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

function changeReadStatus(arr, read) {
    if (arr.indexOf(read) >=0){
    x = !x
    }
    
    return x
}