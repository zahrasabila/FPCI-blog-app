import React from "react";
import Register from "./Register";
import { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../context/userContext";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "admin@gmail.com",
    password: "admin123",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);
  const inputRef = useRef(null);

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    if (inputRef.current) {
      console.log("Input value:", inputRef.current.value);
    }
  };

  console.log(userData);

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/login`,
        userData,
        {
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded; charset=UTF-8;application/json",
          },
        }
      );
      const user = await response.data;
      setCurrentUser(user);
      navigate("/");
    } catch (error) {
      // console.log(error.response?.data);
      setError(error.response?.data?.message);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form action="" className="form login__form" onSubmit={loginUser}>
          {error && <p className="form__error-message">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <small>This is only for authors</small>
          <button type="submit" className="btn primary">
            Login
          </button>
          <Link to="/register"> Register</Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
