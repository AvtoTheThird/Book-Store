import React, { useEffect, useState } from "react";
import Book from "./Book";
import Header from "./Header";
import empty from "../../fotos/Empty-amico.svg";

import axios from "axios";
function Body() {
  const [books, setBooks] = useState<any[]>([]);
  useEffect(() => {
    axios.get("http://localhost:4000/getBooks").then((res) => {
      setBooks(res.data);
    });
  }, []);
  console.log(books);

  return (
    <>
      <Header />

      {books.length > 0 ? (
        <div className="body">
          {books != undefined ? (
            books.map(function (book, i) {
              return <Book {...book} />;
            })
          ) : (
            <h1>LOADIG</h1>
          )}
        </div>
      ) : (
        <div className="body" style={{ display: "block" }}>
          {" "}
          <h1 style={{ color: "white" }}>ყველა წიგნი გაყიდულია</h1>
          <img style={{ width: "45%" }} src={empty} alt="" />
        </div>
      )}
    </>
  );
}

export default Body;
