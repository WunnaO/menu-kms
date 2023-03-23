import React, { useContext, useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, login, errorMsg, setErrorMsg } = useContext(AuthContext);

  const navigator = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigator("/");
    } else {
      if (errorMsg) {
        alert(errorMsg);
        setErrorMsg("");
      }
    }
  }, [isAuth, errorMsg]);

  const onSubmitHandler = (e) => {
    console.log("login");
    e.preventDefault();
    login(userName, password);
  };

  return (
    <div className="container mx-auto">
      <form className="w-2/4 mx-auto" onSubmit={onSubmitHandler}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-2 block text-gray-700 text-sm font-medium"
          >
            UserName
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
            className="w-full pl-7 pr-12 py-2 border outline-none border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-gray-700 text-sm font-medium"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-7 pr-12 py-2 border outline-none border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="py-2 px-5 text-gray-200 block mx-auto bg-indigo-800 rounded-md"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
