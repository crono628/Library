const bookShelf = document.querySelector('[data-book-shelf]');
const addBook = document.querySelector('[data-add-book]');
const submitForm = document.querySelector('[data-submit-form]');
const form = document.forms[0];
const radio = form.elements['read-status'];
const bookStatusDiv = document.getElementsByClassName('book-status');
const bookDelete = document.getElementsByName('book-delete');

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

function render() {
  clearLibrary();
  library.forEach((item) => {
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    dom(
      'button',
      { classList: 'book-delete', name: 'book-delete' },
      'X',
      newBook
    );
    dom('div', { classList: 'book-title' }, item.name, newBook);
    dom('div', { classList: 'book-author' }, item.author, newBook);
    dom('div', { classList: 'book-pages' }, item.pages + ' pages', newBook);
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

function deleteBook(e) {
  let index = e.target.id;
  bookCollection.splice(index, 1);
  render();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let anotherBook = getBookInfo(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pages').value,
    radio.value
  );
  library.push(anotherBook);
  anotherBook.id = library.indexOf(anotherBook);
  clearForm();
  form.classList.toggle('active');
  render();
  console.log(library);
});

addBook.addEventListener('click', () => {
  form.classList.toggle('active');
  clearForm();
});

Array.from(bookStatusDiv).forEach((book) => {
  book.addEventListener('click', (e) => {
    console.log(e);
  });
});

bookDelete.forEach((book) => {
  book.addEventListener('click', (e) => {
    console.log('click');
  });
});
