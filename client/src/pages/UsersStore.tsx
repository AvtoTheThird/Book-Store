import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Book from "../components/Book";
import empty from "../../fotos/Empty-amico.svg";

function UsersStore() {
  const location = useLocation();
  const { owner } = location.state;

  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:4000/getBooksByID", { owner }).then((res) => {
      //   console.log(res.data);
      setBooks(res.data);
    });
  }, [owner]);

  return (
    <>
      <Header />
      <div className="mock-body">
        <h1>მომხმარებელი "{owner.username}"-ს წიგნები</h1>
      </div>
      {books.length > 0 ? (
        <div className="body">
          {books.map((book: Object) => {
            return <Book {...book} />;
          })}
        </div>
      ) : (
        <div className="body" style={{ display: "block" }}>
          {" "}
          <h1 style={{ color: "white" }}>ინფორმაცია იტვირთება</h1>
          <img style={{ width: "45%" }} src={empty} alt="" />
        </div>
      )}
    </>
  );
}

export default UsersStore;
