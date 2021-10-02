const addButton = document.querySelector('.add-book-btn')
const bookShelf = document.querySelector('.book-shelf')
const container = document.querySelector('.container')
const popupContainer = document.querySelector('.popup-container')
const popupBtn = document.querySelectorAll('.popup-btn')
let body = document.querySelector('.body-container')

class Book {
  constructor(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
  }
}

bookCollection = [{
  title: "tester",
  author: "toot",
  pages: "100",
  status: "Completed"
}, {
  title: "test",
  author: "fart",
  pages: "200",
  status: "Completed"
}, {
  title: "tester",
  author: "Ralph",
  pages: "300",
  status: "Completed"
}, {
  title: "Toot, fart, burp, sleep",
  author: "Ralph DeSantis",
  pages: "4",
  status: "Started"
}]

addButton.addEventListener('click', () => {
  body.classList.replace('blur-out', 'blur')
  popupContainer.style.display = 'flex'
  popupContainer.classList.remove('popup-fadeout')
  popupContainer.classList.add('popup-fadein')
})

popupBtn.forEach(button => {
  button.addEventListener('click', () => {
    let btnData = button.dataset.popup
    if (btnData == 'submit') {
      addBook()
      popupLeaving()
      setTimeout(closeForm, 600)
      clearForm()
      purgeLibrary()
      refresh(bookCollection)
    }
    if (btnData == 'cancel') {
      popupLeaving()
      setTimeout(closeForm, 600)
      clearForm()
    }
  })
})

function createBookDiv(bookObj) {
  let bookIndex = getIndex(bookObj)
  let newBook = document.createElement('div')
  let newTitle = document.createElement('h2')
  let newAuthor = document.createElement('p')
  let newPages = document.createElement('p')
  let newStatus = document.createElement('p')
  newBook.classList.add('book')
  newBook.dataset.index = bookIndex
  newTitle.classList.add('new-title')
  newAuthor.classList.add('new-author')
  newPages.classList.add('new-pages')
  newStatus.classList.add('new-status')
  newTitle.innerText = bookObj.title
  newAuthor.innerText = bookObj.author
  newPages.innerText = bookObj.pages
  newStatus.innerText = bookObj.status
  bookShelf.appendChild(newBook)
  newBook.appendChild(newTitle)
  newBook.appendChild(newAuthor)
  newBook.appendChild(newPages)
  newBook.appendChild(newStatus)

  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.setAttribute("id", "delete-btn");
  newDeleteBtn.textContent = "Remove Book";
  newDeleteBtn.addEventListener("click", deleteBook);
  newDeleteBtn.dataset.index = bookIndex;
  newBook.appendChild(newDeleteBtn);

  const changeRead = document.createElement("button");
  changeRead.setAttribute("id", "switch");
  changeRead.textContent = "Change Status";
  changeRead.dataset.index = bookIndex;
  // changeRead.addEventListener("click", toggleRead);
  newBook.appendChild(changeRead);
}

function popupLeaving() {
  body.classList.replace('blur', 'blur-out')
  popupContainer.classList.remove('popup-fadein')
  popupContainer.classList.add('popup-fadeout')
}

function closeForm() {
  popupContainer.style.display = 'none'
}

function addBook() {
  let newBook = new Book(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pages').value,
    document.querySelector('input[name="book-choice"]:checked').value
  )
  bookCollection.push(newBook)
  createBookDiv(newBook)
}

function purgeLibrary() {
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild)
  }
}

function clearForm() {
  document.getElementsByName('book-choice').checked = false
  document.querySelector('#title').value = ''
  document.querySelector('#author').value = ''
  document.querySelector('#pages').value = ''
}

function getIndex(thing) {
  return bookCollection.indexOf(thing)
}

function refresh(library) {
  library.forEach((book) => {
    createBookDiv(book)
  })
}

function deleteBook(e) {
  let bookArrIndex = e.target.dataset.index;
  bookCollection.splice(bookArrIndex, 1)
  purgeLibrary()
  refresh(bookCollection)
}

refresh(bookCollection)