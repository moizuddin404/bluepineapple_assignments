import { useState } from "react";
import axios from "axios";

export function AddBook() {
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [url, setUrl] = useState("");

  async function handleAddBook() {
    if (!bookName || !bookAuthor || !url) {
      alert("Please fill all fields");
      return;
    }

    const newBook = { bookName, bookAuthor, url };

    try {
      const response = await axios.post(
        "http://localhost:5000/add-book",
        newBook
      );
      alert(response.data.message);
      setBookName("");
      setBookAuthor("");
      setUrl("");
    } catch (error) {
      console.error("Unable to add the book");
      alert("Unable to add the book");
    }
  }
  return (
    <div className="add-books-form">
      <h1>Add a Book</h1>
      <input
        type="text"
        placeholder="Book Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
}
