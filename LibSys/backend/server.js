const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;
const booksFilePath = path.join(__dirname, "library.json");

app.use(cors());
app.use(express.json());

const filePath = "./library.json";

loadBooks = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

/*JSON.stringify(obj, null, 2) will return a pretty print
   JSON string with an indentation of two spaces.
   ==== from Dhiwise.com */

app.get("/books", (req, res) => {
  res.json(loadBooks());
});

app.post("/add-book", (req, res) => {
  const { bookName, bookAuthor, url } = req.body;

  if (!bookName || !bookAuthor || !url) {
    return res.status(400).json({ message: "All Fields are required" });
  }

  fs.readFile(booksFilePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading library" });
    }

    let books = JSON.parse(data);

    const bookId = books.length > 0 ? books[books.length - 1].bookId + 1 : 1;
    const newBook = { bookId, bookName, bookAuthor, url };
    books.push(newBook);

    fs.writeFile(booksFilePath, JSON.stringify(books, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error saving book" });
      }
      res.json({ message: "Book added successfully", book: newBook });
    });
  });
});

app.delete("/deletebook", async (req, res) => {
  try {
    const { bookName } = req.body;

    if (!bookName) {
      return res.status(400).json({ message: "Book Name required" });
    }

    const books = JSON.parse(fs.readFileSync(booksFilePath, "utf-8"));
    const bookIndex = books.findIndex(
      (book) =>
        book.bookName.toLowerCase().trim() === bookName.toLowerCase().trim()
    );

    if (bookIndex === -1) {
      return res.status(404).json({ message: "Book not Found" });
    }
    books.splice(bookIndex, 1);

    fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
    res.status(200).json({ message: "Book Removed from library" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
