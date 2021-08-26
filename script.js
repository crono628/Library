const myTitle = document.querySelector(".title");
const myAuthor = document.querySelector(".author");
const myPages = document.querySelector(".pages");
const myRead = document.querySelector(".read");
const collection = document.querySelector(".book-collection");
const subBtn = document.querySelector("#submit-btn");
const addBtn = document.querySelector(".add-btn");
const popup = document.querySelector("#my-popup");
const deleteBtn = document.querySelector("#delete-btn");

let myLibrary = [
{
  title: "Test Title",
  author: "Test Author",
  pages: "250",
  read: true
}
];

updateLibrary(myLibrary)

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createBookCard(book) {
  let bookIndex = getIndex(book);
  const newDiv = document.createElement("div");
  newDiv.classList.add("new-book");
  newDiv.dataset.index = bookIndex;
  collection.appendChild(newDiv);

  const newTitle = document.createElement("h2");
  newTitle.classList.add("new-title");
  newTitle.textContent = book.title;
  newDiv.appendChild(newTitle);

  const newAuthor = document.createElement("p");
  newAuthor.textContent = "by " + book.author;
  newDiv.appendChild(newAuthor);

  const newPages = document.createElement("p");
  newPages.textContent = book.pages;
  newDiv.appendChild(newPages);

  const newRead = document.createElement("p");
  newRead.textContent = book.read;
  newRead.dataset.index = bookIndex
  newDiv.appendChild(newRead);

  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.setAttribute("id", "delete-btn");
  newDeleteBtn.textContent = "Remove Book";
  newDeleteBtn.addEventListener("click", deleteBook);
  newDeleteBtn.dataset.index = bookIndex;
  newDiv.appendChild(newDeleteBtn);

  const changeRead = document.createElement("button");
  changeRead.setAttribute("id", "switch");
  changeRead.textContent = "Change Status";
  changeRead.dataset.index = bookIndex;
  changeRead.addEventListener("click", toggleRead);
  newDiv.appendChild(changeRead);
}

function addBookToLibrary() {
  let newBook = new Book(
    myTitle.value,
    myAuthor.value,
    myPages.value,
    myRead.checked
  );
  myLibrary.push(newBook);
  createBookCard(newBook);
}

function updateLibrary(books) {
  books.forEach((book) => {
    createBookCard(book);
  });
}

function getIndex(obj) {
  return myLibrary.indexOf(obj);
};

function clearInput() {
  myTitle.value = "";
  myAuthor.value = "";
  myPages.value = "";
  myRead.checked = false;
};

function toggleRead(e) {
  let bookArrIndex = e.target.dataset.index;
  if (myLibrary[bookArrIndex].read === true){
    myLibrary[bookArrIndex].read = false
  } else if (myLibrary[bookArrIndex].read === false){
    myLibrary[bookArrIndex].read = true
  }
  deleteLibrary()
  updateLibrary(myLibrary)
}

function deleteBook(e) {
  let bookArrIndex = e.target.dataset.index;
  myLibrary.splice(bookArrIndex, 1)
  deleteLibrary()
  updateLibrary(myLibrary)
  console.log(bookArrIndex)
  console.log(myLibrary)
}

function deleteLibrary() {
  let bookDiv = document.querySelectorAll(".new-book");
  if (bookDiv.length <= 0) {
    return
  } else {
    for (let i = 0; i < bookDiv.length; i++) {
      collection.removeChild(bookDiv[i]);
    }
  }
}

function openForm() {
  popup.style.display = "block";
};

function closeForm() {
  popup.style.display = "none";
};

addBtn.addEventListener("click", function () {
  if (popup.style.display == "block") {
    addBtn.textContent = "Add book";
    closeForm();
  } else {
    addBtn.textContent = "Close form";
    openForm();
  }
});

subBtn.addEventListener("click", function () {
  if (
    !myTitle.value.replace(/\s/g, "").length ||
    !myAuthor.value.replace(/\s/g, "").length
  ) {
    console.log("Please enter a title and/or author");
  } else {
    addBookToLibrary();
    clearInput();
    closeForm();
    addBtn.textContent = "Add book";
  }
});