import React from "react";
import { Navigate } from "react-router-dom";

function Book(props: any) {
  console.log(props);

  return (
    <div className="books">
      <a href="/BookDetails">
        <div className="book">
          <p
            style={{
              position: "absolute",
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "5px",
            }}
          >
            {props.dealType}
          </p>
          <img style={{ height: "20rem" }} src={props.image} alt="" />
          <h2>{props.name}</h2>
          <h3>{props.author}</h3>
          <h1>{props.price}ლ</h1>
        </div>{" "}
      </a>
    </div>
  );
}

export default Book;
