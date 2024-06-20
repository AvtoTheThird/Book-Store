import { useState } from "react";
import Header from "../components/Header";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

type FormValues = {
  username: string;
  password: string;

  phone: string;
};

const schema = yup.object({
  username: yup.string().required("სავალდებულოა").min(3, "მინიმუმ 3 სიმბოლო"),
  password: yup
    .string()
    .required("სავალდებულოა")
    .min(8, "მინიმუმ 8 სიმბოლო")
    .matches(/[A-Z]/, "მინიმუმ 1 დიდი ასო")
    .matches(/[0-9]/, "მინიმუმ 1 ციფრი"),
  phone: yup
    .string()
    .required("სავალდებულოა")
    .matches(/^\d+$/, "შეიყვანეთ მხოლორ რიცხვები")
    .length(9, "ნომერი მოკლეა"),
});

function Login() {
  const [login, setLogin] = useState(true);
  const [LoginUserName, setLoginUserName] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  function loginFunc() {
    Axios.post(
      "http://localhost:4000/login",
      {
        username: LoginUserName,
        password: LoginPassword,
      },
      { withCredentials: true }
    ).then((res) => {
      if (res.data == "ok") {
        setRedirect(true);
      } else if (res.status == 400) {
        alert("wrong credentials");
      }
    });
    history("/Body");
  }
  const history = useNavigate();

  // history("/SearchResults", { state: { search } });
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      phone: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    Axios.post(
      "http://localhost:4000/register",
      {
        data,
      },
      { withCredentials: true }
    ).then((res) => {
      if (res.status != 200) {
        alert("something went wrong, try again later");
      } else {
        alert("user registered");
      }

      // console.log(res);
    });
    // console.log(register);
  };
  if (redirect) {
    return <Navigate to={"/Body"} />;
  }
  return (
    <>
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
            <p style={{ color: "#CFCFCF" }}>login</p>
            <input
              onChange={(e) => {
                setLoginUserName(e.target.value);
              }}
              type="text"
              name=""
              id="login-username"
              placeholder="username"
            />
            <p style={{ color: "#CFCFCF" }}>password</p>
            <input
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              type="password"
              name=""
              id="login-passowrd"
              placeholder="password"
            />
            <br />
            <button onClick={loginFunc} className="button-28">
              login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <p style={{ color: "#CFCFCF" }}>user name</p>

            <input
              type="text"
              id="username"
              placeholder="username"
              {...register("username")}
            />
            <p className="error">{errors.username?.message}</p>

            <p style={{ color: "#CFCFCF" }}>password</p>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="password"
            />
            <p className="error">{errors.password?.message}</p>

            <p style={{ color: "#CFCFCF" }}>phone number</p>
            <input
              {...register("phone")}
              type="text"
              id="phone"
              placeholder="555666777"
            />
            <p className="error">{errors.phone?.message}</p>

            <br />
            <button className="button-28">register</button>
          </form>
        )}
      </div>
    </>
  );
}

export default Login;
