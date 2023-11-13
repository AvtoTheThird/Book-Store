import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";

import Axios from "axios";
import Book from "./Book";
function MyBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/usersBooks", {
      withCredentials: true,
    }).then((res) => {
      setBooks(res.data);
    });
  }, []);
  console.log(books);

  return (
    <div>
      <Header />
      <div className="body">
        {books != undefined ? (
          books.map(function (book: any) {
            return <Book {...book} />;
          })
        ) : (
          <h1>LOADIG</h1>
        )}
      </div>
    </div>
  );
}

export default MyBooks;
