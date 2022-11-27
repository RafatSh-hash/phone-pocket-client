import React, { useContext } from "react";
import Lottie from "lottie-react";
import login from "../../Assets/login.json";
import { AuthContext } from "../../Context/Context";
import { useState } from "react";
import useToken from "../../Hooks/useToken";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";
import "aos/dist/aos.css";
import AOS from "aos";

const Login = () => {
  AOS.init({ duration: 500 });
  useTitle("Login");
  const [currentUser, setCurrrentUser] = useState(null);
  const [error, setError] = useState("");
  const { loginWithEmailPass, googleLogin } = useContext(AuthContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail, true);
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
        toast.success("Logged In Successfully!!");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
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
        // saveUser(Guser);
        setLoginEmail(Guser.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
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
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col w-11/12 mt-10 mx-auto h-auto items-center justify-evenly">
      <div data-aos="fade-right" className="lg:w-1/2 sm:w-full md:w-1/4">
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
          {error && <p className="text-red-500 text-center">{error}</p>}
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
            <div className="w-full">
              <Button onClick={handleGoogleLogin} gradientMonochrome="info">
                Google
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 sm:w-full md:w-1/3 p-8 hover:-translate-y-1 hover:scale-110 duration-500">
        <Lottie animationData={login} loop={true} />
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
