const app = new Vue({
    el: "#app",
    data: {
      books: [],
      selectedBook: null,
      details: null,
      loading: false,
      error: null
    },
    created() {
      this.fetchBooks();
    },
    methods: {
      fetchBooks() {
        this.loading = true;
        fetch("json/entries.json")
          .then(response => response.json())
          .then(data => {
            this.books = data;
            this.loading = false;
          })
          .catch(err => {
            this.error = "Failed to load books.";
            this.loading = false;
          });
      },
      selectBook(bookId) {
        this.selectedBook = bookId;
        this.loading = true;
        fetch("json/details.json")
          .then(response => response.json())
          .then(data => {
            this.details = data[bookId];
            this.loading = false;
          })
          .catch(err => {
            this.error = "Failed to load book details.";
            this.loading = false;
          });
      }
    }
  });
  
