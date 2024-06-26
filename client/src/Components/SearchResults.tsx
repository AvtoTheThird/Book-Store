import { useLocation } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from "react";
import Axios from "axios";
import Book from "./Book";

function SearchResults() {
  const location = useLocation();
  const data = location.state.search;
  useEffect(() => {
    Axios.post("https://book-store-t1fe.onrender.com/search", { data }).then(
      (res) => {
        setbooks(res.data);
      }
    );
  }, []);
  const [books, setbooks] = useState<any[]>([]);
  //   console.log(data);

  return (
    <div>
      <Header />
      <div className="mock-body">
        <h1>ძებნის შედეგები "{data}"-სთვის:</h1>
      </div>
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
          <h1 style={{ color: "white" }}>განცხადება ვერ მოიძებნა</h1>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
