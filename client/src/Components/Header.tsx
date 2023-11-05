import React from "react";
import "../App.css";
function Header() {
  return (
    <header>
      <div className="Info">
        <h1 style={{ textAlign: "center", paddingBottom: "1rem" }}>
          მეორადი წიგნების მაღაზია
        </h1>
        <h3 style={{ paddingTop: "0.7rem" }}>მთავარი</h3>
        <h3 style={{ paddingTop: "0.7rem" }}>შესვლა</h3>
        <h3 style={{ paddingTop: "0.7rem" }}>ჩვენს შესახებ</h3>

        <div>
          {" "}
          <input
            style={{ height: "1.5rem", marginTop: "0.7rem" }}
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
