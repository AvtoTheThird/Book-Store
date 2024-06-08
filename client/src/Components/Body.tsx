import { useEffect, useState } from "react";
import Book from "./Book";
import Header from "./Header";
import empty from "../../fotos/Empty-amico.svg";

function Body() {
  const [books, setBooks] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((i) => i);
  useEffect(() => {
    fetch(`https://book-store-t1fe.onrender.com/getBooks?page=${pageNumber}`)
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
  //   axios.get("https://book-store-t1fe.onrender.com/getBooks").then((res) => {
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
            books.map(function (book) {
              return <Book {...book} />;
            })
          ) : (
            <h1>LOADIG</h1>
          )}
        </div>
      ) : (
        <div className="body" style={{ display: "block" }}>
          {" "}
          <h1 style={{ color: "white" }}>ინფორმაცია იტვირთება</h1>
          <img style={{ width: "45%" }} src={empty} alt="" />
        </div>
      )}

      <div className="page-indexes">
        <button className="stepper-button" onClick={gotoPrevious}>
          {" "}
          {"<"}{" "}
        </button>
        {pages.map((pageIndex) => (
          <button
            className="stepper-button"
            key={pageIndex}
            onClick={() => setPageNumber(pageIndex)}
          >
            {pageIndex + 1}
          </button>
        ))}
        <button className="stepper-button" onClick={gotoNext}>
          {">"}
        </button>
      </div>
    </>
  );
}

export default Body;
