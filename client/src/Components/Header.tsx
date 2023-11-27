import React from "react";
import downarrow from "../../fotos/down-arrow.svg";
import { useState, useEffect } from "react";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";

import Axios from "axios";
function Header() {
  const history = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:4000/profile", {
      withCredentials: true,
    }).then((res) => {
      // console.log(res);
      setUsername(res.data.username);
    });
  }, []);
  // console.log(search);

  function logout() {
    Axios.post("http://localhost:4000/logout", {}, { withCredentials: true });
    setUsername("");
  }
  function Search() {
    // Axios.post("http://localhost:4000/search", { search });

    history("/SearchResults", { state: { search } });
    window.location.reload();
  }
  return (
    <header>
      <div className="Info">
        <a href="/">
          <h1>მეორადი წიგნების მაღაზია</h1>
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
                <h3>
                  {username} <br />
                  <img style={{ width: "20px" }} src={downarrow} alt="" />
                </h3>
              </button>
              <div className="dropdown-content">
                <a href="/CreateBook">წიგნის დამატება</a>
                <a href="/MyBooks">ჩემი წიგნები</a>
                <a href="/" onClick={logout}>
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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            name=""
            id="serch"
          />
          <button onClick={Search}>serch</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
