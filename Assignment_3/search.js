const rollNumber = "26100042";

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const query = document.getElementById("query").value;
  fetch(
    `https://api.assignment3.rohanhussain.com/books/search/${rollNumber}?query=${query}`
  )
    .then((response) => response.json())
    .then((data) => {
      const resultsList = document.getElementById("results");
      resultsList.innerHTML = ""; 
      data.books.forEach((book) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `${book.title} by ${book.author} - $${book.price}`;
        resultsList.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error:", error));
});
