const bookShelf = document.querySelector('[data-book-shelf]');
const addBook = document.querySelector('[data-add-book]');
const submitForm = document.querySelector('[data-submit-form]');
const form = document.forms[0];
const radio = form.elements['read-status'];
const books = document.getElementsByClassName('book');

let library = [
  { author: 'author', id: 2, name: 'title', pages: '0', status: 'Read' },
  {
    author: 'Ralph DeSantis',
    id: 2,
    name: 'Eat, Toot, Burp',
    pages: '10',
    status: 'Read',
  },
  { author: 'author', id: 2, name: 'title', pages: '0', status: 'Read' },
  { author: 'author', id: 2, name: 'title', pages: '0', status: 'Read' },
];
render();

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
    newBook.id = library.indexOf(item);
    dom('button', { classList: 'book-delete' }, 'X', newBook);
    dom('div', { classList: 'book-title' }, item.name, newBook);
    dom('div', { classList: 'book-author' }, item.author, newBook);
    dom('div', { classList: 'book-pages' }, item.pages + ' pages', newBook);
    dom('div', { classList: 'book-status' }, item.status, newBook);
    newBook.addEventListener('click', (e) => {
      if (e.target.innerText === 'X') {
        deleteBook(e);
      }
      if (e.target.classList.contains('book-status')) {
        toggleStatus(e);
      }
    });
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

function deleteBook(event) {
  let index = event.target.parentElement.id;
  library.splice(index, 1);
  render();
}

function toggleStatus(event) {
  let bookIndex = event.target.parentElement.id;
  if (event.target.innerText === 'Read') {
    library[bookIndex].status = 'Unread';
  } else {
    library[bookIndex].status = 'Read';
  }
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
