import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import Axios from "axios";
function Header() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:4000/profile", {
      withCredentials: true,
    }).then((res) => {
      setUsername(res.data.username);
    });
  }, []);

  function logout() {
    Axios.post("http://localhost:4000/logout", {}, { withCredentials: true });
    setUsername("");
  }
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
          {username == "" ? (
            <a href="/Login">შესვლა</a>
          ) : (
            <div className="dropdown">
              <button className="dropbtn">
                <h3>{username}</h3>
              </button>
              <div className="dropdown-content">
                <a href="/MyBooks">ჩემი წიგნები</a>
                <a href="/CreateBook">წიგნის დამატება</a>
                <a href="/Landing" onClick={logout}>
                  გამოსვლა
                </a>
              </div>
            </div>
          )}
        </h3>
        <h3 style={{ paddingTop: "0.7rem" }}>{}</h3>

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
