const addButton = document.querySelector('.add-book-btn')
const bookShelf = document.querySelector('.book-shelf')
const container = document.querySelector('.container')
const popupContainer = document.querySelector('.popup-container')
const popupBtn = document.querySelectorAll('.popup-btn')

addButton.addEventListener('click', () => {
  let newDiv = document.createElement('div')
  container.appendChild(newDiv)
  newDiv.classList.add('book')
  openForm()
})

popupBtn.forEach(button => {
  button.addEventListener('click', () => {
    let btnData = button.dataset.popup
    if (btnData == 'submit') {
      closeForm()
    }
    if (btnData == 'cancel') {
      closeForm()
    }
  })
})

function openForm() {
  popupContainer.style.display = 'flex'
}

function closeForm() {
  popupContainer.style.display = 'none'
}