document.addEventListener("DOMContentLoaded", function () {
  // Function to add a book to the list
  document.getElementById("addBookForm").addEventListener("submit", function (event) {
      event.preventDefault();

      // Get input values
      const bookTitle = document.getElementById("bookTitle").value.trim();
      const bookAuthor = document.getElementById("bookAuthor").value.trim();

      if (!bookTitle || !bookAuthor) {
        alert("Please fill in both the book title and author.");
        return;
      }

      // Create a new book entry
      const bookEntry = document.createElement("div");
      bookEntry.classList.add("card", "mb-3");
      bookEntry.innerHTML = `
      <div class="card-body">
          <h5 class="card-title">${bookTitle}</h5>
          <p class="card-text">Author: ${bookAuthor}</p>
      </div>
  `;

      // Add to the books list
      const booksList = document.getElementById("booksList");
      const placeholder = document.querySelector("#booksList .alert");

      // Remove placeholder alert if it exists
      if (placeholder) {
        placeholder.remove();
      }

      booksList.appendChild(bookEntry);

      // Clear the form
      document.getElementById("addBookForm").reset();
    });
});
