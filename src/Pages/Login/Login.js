import React, { useContext } from "react";
import Lottie from "lottie-react";
import login from "../../Assets/login.json";
import { AuthContext } from "../../Context/Context";
import { useState } from "react";
import useToken from "../../Hooks/useToken";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [currentUser, setCurrrentUser] = useState(null);
  const { loginWithEmailPass, googleLogin } = useContext(AuthContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginEmail(user.email);
        setCurrrentUser(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser.displayName);

        const Guser = {
          email: googleUser.email,
          name: googleUser.displayName,
          role: "user",
        };
        saveUser(Guser);
        setLoginEmail(Guser.email);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const saveUser = (Guser) => {
    const user = {
      name: Guser.name,
      email: Guser.email,
      role: "user",
    };
    console.log(user);
    fetch("http://localhost:1000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col w-11/12 mt-10 mx-auto h-auto items-center justify-evenly">
      <div className="lg:w-1/2 sm:w-full md:w-1/4">
        <form
          className=" border w-[60%] mx-auto bg-gray-200 dark:bg-gray-600 dark:text-white border-blue-500 py-5 px-5 shadow-lg hover:shadow-2xl rounded-2xl "
          onSubmit={handleLogin}
        >
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your passcode
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Login
          </button>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="w-10 mx-auto my-2 h-auto items-center justify-center">
              <p className="bg-black rounded-2xl text-white px-2 ">
                <small>OR</small>
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="text-white w-1/2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              <span className="ml-3 text-center"> Google</span>
            </button>
            <button
              type="button"
              className="text-white w-1/2 bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                ></path>
              </svg>
              <span className="ml-3 text-center"> Facebook</span>
            </button>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 sm:w-full md:w-1/3 p-8 hover:-translate-y-1 hover:scale-110 duration-500">
        <Lottie animationData={login} loop={true} />
      </div>
    </div>
  );
};

export default Login;
