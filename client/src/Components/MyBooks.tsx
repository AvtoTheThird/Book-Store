import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import BookEditDelete from "./BookEditDelete";
import Axios from "axios";
import empty from "../../fotos/Empty-amico.svg";
function MyBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/usersBooks", {
      withCredentials: true,
    }).then((res) => {
      setBooks(res.data);
    });
  }, []);
  console.log(books.length);

  return (
    <div>
      <Header />
      <div>
        {books.length > 0 ? (
          <div className="body">
            <div></div>
            {books != undefined ? (
              books.map(function (book: any) {
                return <BookEditDelete {...book} />;
              })
            ) : (
              <h1>LOADIG</h1>
            )}
          </div>
        ) : (
          <div className="body" style={{ display: "block" }}>
            {" "}
            <h1 style={{ color: "white" }}>შენ არ გაქვს აქტიური განცხადება</h1>
            <img style={{ width: "45%" }} src={empty} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default MyBooks;
