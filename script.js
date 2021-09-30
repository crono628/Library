const addButton = document.querySelector('.add-book-btn')
const bookShelf = document.querySelector('.book-shelf')
const container = document.querySelector('.container')
const popupContainer = document.querySelector('.popup-container')

addButton.addEventListener('click', () => {
  let newDiv = document.createElement('div')
  container.appendChild(newDiv)
  newDiv.classList.add('book')
  openForm()
})

function openForm() {
  popupContainer.style.display = 'flex'
}

function closeForm() {
  popupContainer.style.display = 'none'
}