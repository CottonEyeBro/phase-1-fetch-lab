function fetchBooks() {
  // Remember to return your monkey
  const monkey = fetch("https://anapioficeandfire.com/api/books")
    .then(response => {
      return response.json()
    })
    .then(data => {
      return renderBooks(data)
    })
    return monkey
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

