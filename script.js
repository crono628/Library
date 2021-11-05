const bookShelf = document.querySelector('[data-book-shelf]');
const addBook = document.querySelector('[data-add-book]');
const submitForm = document.querySelector('[data-submit-form]');
const form = document.querySelector('.form');

let library = [];

function dom(element, attributes = {}, text, parent) {
  const elem = document.createElement(element);
  if (attributes) {
    Object.assign(elem, attributes);
  }
  if (text) {
    elem.innerText = text;
  }
  if (parent) {
    parent.appendChild(elem);
  }
}

function getBookInfo(name, author, pages, status) {
  return { name, author, pages, status };
}

// function createBook(){

// }

function render() {
  library.forEach((item) => {
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    dom('div', { classList: 'book-title' }, item.name, newBook);
    dom('div', { classList: 'book-author' }, item.author, newBook);
    dom('div', { classList: 'book-pages' }, item.pages, newBook);
    dom('div', { classList: 'book-status' }, item.status, newBook);
    bookShelf.appendChild(newBook);
  });
}

function clearLibrary() {
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
  }
}

function clearForm() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.getElementsByName('read-status').checked = false;
}

submitForm.addEventListener('click', (e) => {
  let anotherBook = getBookInfo(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pages').value,
    document.querySelector('input[name = "read-status"]:checked').value
  );
  library.push(anotherBook);
  clearLibrary();
  clearForm();
  render();
  console.log(library);
});

addBook.addEventListener('click', () => {
  form.classList.toggle('active');
});
