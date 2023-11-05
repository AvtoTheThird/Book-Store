import React from "react";
import BookFoto from "../../fotos/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg";
function Book() {
  return (
    <div className="books">
      <div className="book">
        <p
          style={{
            position: "absolute",
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "5px",
          }}
        >
          იყიდება
        </p>
        <img style={{ height: "20rem" }} src={BookFoto} alt="" />
        <h2>title</h2>
        <h3>author</h3>
        <h1>price</h1>
      </div>
    </div>
  );
}

export default Book;
