import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function Book(props: any) {
  const history = useNavigate();
  const location = useLocation();
  const goToDetails = () => {
    history("/BookDetails", { state: { props } });
  };
  return (
    <div className="books">
      <a onClick={() => goToDetails()}>
        <div className="book">
          <p
            style={{
              position: "absolute",
              backgroundColor: "#11141D",
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
