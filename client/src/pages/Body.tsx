import { useContext, useEffect, useState } from "react";
import Book from "../components/Book";
import Header from "../components/Header";
import empty from "../../fotos/Empty-amico.svg";
import { bookContext } from "../components/Context";
function Body() {
  const {
    cashedBooks,
    // numberOfPages,
    pages,
    gotoPrevious,
    gotoNext,
    changePageNumber,
  } = useContext(bookContext);

  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    // cashedBooks.length > 0 ? setBooks(cashedBooks) : setBooks([]);
    setBooks(cashedBooks);
  }, [cashedBooks]);
  // console.log(books);
  // const pages = new Array(numberOfPages).fill(null).map((i) => i);
  // console.log(pages);

  return (
    <>
      <Header />
      {books.length > 0 ? (
        <div className="body">
          {books != undefined ? (
            books.map(function (book) {
              return <Book key={book.id} {...book} />;
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
          {"<"}
        </button>
        {pages.map((pageIndex) => (
          <button
            className="stepper-button"
            key={pageIndex}
            onClick={() => changePageNumber(pageIndex)}
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
