import React, { useEffect, useState } from "react";
import Book from "./Book";
import Header from "./Header";
import empty from "../../fotos/Empty-amico.svg";

import axios from "axios";
function Body() {
  const [books, setBooks] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  useEffect(() => {
    fetch(`http://localhost:4000/getBooks?page=${pageNumber}`)
      .then((response) => response.json())
      .then(({ totalPages, posts }) => {
        setBooks(posts);
        setNumberOfPages(totalPages);
      });
  }, [pageNumber]);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };
  // useEffect(() => {
  //   axios.get("http://localhost:4000/getBooks").then((res) => {
  //     setBooks(res.data);
  //   });
  // }, []);
  // console.log(books);

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

      <div className="page-indexes">
        <button onClick={gotoPrevious}>Previous</button>
        {pages.map((pageIndex) => (
          <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
            {pageIndex + 1}
          </button>
        ))}
        <button onClick={gotoNext}>Next</button>
      </div>
    </>
  );
}

export default Body;
