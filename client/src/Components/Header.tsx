import React from "react";
import downarrow from "../../fotos/down-arrow.svg";
import { useState, useEffect } from "react";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import searchIcon from "../../fotos/search.png.png";
import logo from "../../fotos/logo.png";
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
      <a href="/">
        <img style={{ width: "6vh" }} src={logo} alt="" />
      </a>
      <a href="/Body">
        <h3>მაღაზია</h3>
      </a>
      <h3>
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
      <div>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="search"
          name="search"
          id="serch"
        />
        <img
          onClick={Search}
          style={{
            width: "20px",
          }}
          src={searchIcon}
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
