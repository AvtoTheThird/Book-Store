import React from "react";
import "../App.css";
function Header() {
  return (
    <header>
      <div className="Info">
        <a href="/">
          <h1 style={{ textAlign: "center", paddingBottom: "1rem" }}>
            მეორადი წიგნების მაღაზია
          </h1>
        </a>
        <a href="/Body">
          <h3 style={{ paddingTop: "0.7rem" }}>მაღაზია</h3>
        </a>
        <h3 style={{ paddingTop: "0.7rem" }}>
          <a href="/Login">შესვლა</a>
        </h3>
        <h3 style={{ paddingTop: "0.7rem" }}>ჩვენს შესახებ</h3>

        <div>
          {" "}
          <input
            style={{
              height: "1.5rem",
              marginTop: "0.7rem",
              width: "9rem",
              borderRadius: "0",
            }}
            type="text"
            name=""
            id=""
          />
          <button>serch</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
