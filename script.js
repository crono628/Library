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

  createBookDiv() {
    let newDiv = document.createElement('div')
    let newTitle = document.createElement('h2')
    newDiv.classList.add('book')
    bookShelf.appendChild(newDiv)
    newDiv.appendChild(newTitle)
  }

}

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
      let book = new Book
      book.createBookDiv()
      popupLeaving()
      setTimeout(closeForm, 600)
    }
    if (btnData == 'cancel') {
      popupLeaving()
      setTimeout(closeForm, 600)
    }
  })
})

function popupLeaving() {
  body.classList.replace('blur', 'blur-out')
  popupContainer.classList.remove('popup-fadein')
  popupContainer.classList.add('popup-fadeout')
}

function closeForm() {
  popupContainer.style.display = 'none'
}

