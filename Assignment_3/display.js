const rollNumber = "26100042"; 

document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = document.getElementById("bookForm");
  const formData = new FormData(form);
  fetch(`https://api.assignment3.rohanhussain.com/books/${rollNumber}`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
        loadBooks(); 
      } else {
        alert("Failed to add book. Please try again.");
      }
    })
    .catch((error) => console.error("Error:", error));
});

function loadBooks() {
  fetch(`https://api.assignment3.rohanhussain.com/books/${rollNumber}`)
    .then((response) => response.json())
    .then((data) => {
      const booksList = document.getElementById("books");
      booksList.innerHTML = ""; 
      data.books.forEach((book) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `${book.title} by ${book.author} - $${book.price}`;
        booksList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error:", error));
}

loadBooks();
