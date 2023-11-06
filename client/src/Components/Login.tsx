import React, { useState } from "react";
import Header from "./Header";
import Axios from "axios";
function Login() {
  const [login, setLogin] = useState(true);
  const [RegUserName, setRegUserName] = useState("");
  const [RegPassword, setRegPassword] = useState("");
  const [phone, setPhone] = useState("");
  function register() {
    Axios.post("http://localhost:4000/register", {
      username: RegUserName,
      password: RegPassword,
      phone: phone,
    }).then();
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
            <input type="text" name="" id="" placeholder="username" />
            <p>password</p>
            <input type="text" name="" id="" placeholder="password" />
            <br />
            <button className="button-28">login</button>
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
            <button onClick={register} className="button-28">
              register
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
