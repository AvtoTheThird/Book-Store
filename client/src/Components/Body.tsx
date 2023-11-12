import React, { useEffect, useState } from "react";
import Book from "./Book";
import Header from "./Header";
import axios from "axios";
function Body() {
  const [books, setBooks] = useState<any[]>([]);
  useEffect(() => {
    axios.get("http://localhost:4000/getBooks").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <>
      {" "}
      <Header />
      <div className="body">
        {books != undefined ? (
          books.map(function (book, i) {
            return <Book {...book} />;
          })
        ) : (
          <h1>LOADIG</h1>
        )}
      </div>
    </>
  );
}

export default Body;
