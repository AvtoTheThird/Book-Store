import React from "react";
import { Navigate } from "react-router-dom";

import BookFoto from "../../fotos/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg";

function func() {
  return <Navigate to={"/BookDetails"} />;
}
function Book() {
  return (
    <div className="books">
      <a href="/BookDetails" style={{}}>
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
        </div>{" "}
      </a>
    </div>
  );
}

export default Book;
