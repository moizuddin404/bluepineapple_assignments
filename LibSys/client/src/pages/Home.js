import React, { useState, useEffect } from "react";
import axios from "axios";
import { AllBooks } from "../components/allBooks";

export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  async function handleDelete(bookName) {
    try {
      const ans = window.confirm("Are you sure to delete this from library?");
      if (!ans) {
        return;
      }
      await axios.delete(`http://localhost:5000/deletebook`, {
        data: { bookName: bookName },
      });
      const resp = await axios.get("http://localhost:5000/books");
      setData(resp.data);
    } catch (error) {
      console.error("Error Deleting ", error);
    }
  }

  return (
    <div>
      <h1>Moiz Library</h1>
      <h2>Check out the latest books!</h2>
      {data.length > 0 ? (
        <AllBooks data={data} handleDelete={handleDelete} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
