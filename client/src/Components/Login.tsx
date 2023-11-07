import React, { useState } from "react";
import Header from "./Header";
import Axios from "axios";
import { Navigate } from "react-router-dom";
function Login() {
  const [login, setLogin] = useState(true);
  const [RegUserName, setRegUserName] = useState("");
  const [RegPassword, setRegPassword] = useState("");

  const [LoginUserName, setLoginUserName] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [phone, setPhone] = useState("");
  function registerFunc() {
    Axios.post(
      "http://localhost:4000/register",
      {
        username: RegUserName,
        password: RegPassword,
        phone: phone,
      },
      { withCredentials: true }
    ).then((res) => {
      if (res.status != 200) {
        alert("something went wrong, try again later");
      } else {
        alert("user registered");
      }

      console.log(res);
    });
  }

  function loginFunc() {
    Axios.post(
      "http://localhost:4000/login",
      {
        username: LoginUserName,
        password: LoginPassword,
      },
      { withCredentials: true }
    ).then((res) => {
      // console.log(res);

      if (res.data == "ok") {
        setRedirect(true);
      } else if (res.status == 400) {
        alert("wrong credentials");
      }
    });
  }

  if (redirect) {
    return <Navigate to={"/Body"} />;
  }
  return (
    <>
      {" "}
      <Header />
      <div className="login-register">
        <div className="checkbox-wrapper-55">
          <label className="rocker rocker-small">
            <input
              onClick={() => {
                setLogin(!login);
              }}
              type="checkbox"
            />
            <span className="switch-left">register</span>
            <span className="switch-right">login</span>
          </label>
        </div>

        {login ? (
          <div>
            <p>login</p>
            <input
              onChange={(e) => {
                setLoginUserName(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="username"
            />
            <p>password</p>
            <input
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="password"
            />
            <br />
            <button onClick={loginFunc} className="button-28">
              login
            </button>
          </div>
        ) : (
          <div>
            <p>user name</p>
            <input
              onChange={(e) => {
                setRegUserName(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="username"
            />
            <p>password</p>
            <input
              onChange={(e) => {
                setRegPassword(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="password"
            />
            <p>phone number</p>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="555666777"
            />
            <br />
            <button onClick={registerFunc} className="button-28">
              register
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
