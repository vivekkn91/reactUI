import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import fakeData from "../../data.json";

export default function login() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check for an existing token on initial load
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // Update state or perform any other actions as needed
      setLogin(fakeData.users[0]); // Assuming user is already logged in
    }
  }, []);

  const handleLogin = () => {
    const user = fakeData.users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Simulate successful login with a random token
      const randomToken = generateRandomToken();

      localStorage.setItem("token", randomToken);
      localStorage.setItem("user", user.username);

      // Update state or perform any other actions as needed
      setLogin(fakeData.users[0]);
      navigate("/dashboard");
    } else {
      console.log("error");
    }
  };

  const generateRandomToken = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const tokenLength = 32; // Adjust the length as needed
    let token = "";

    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }

    return token;
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 margin-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* {login.id} */}
        {/* <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-black hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                // id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleLogin}
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-black">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-black hover:text-indigo-500"
          >
            register
          </a>
        </p>
      </div>
    </div>
  );
}
