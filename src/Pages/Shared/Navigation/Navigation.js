import { Navbar, Tooltip } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";
import logo from "../../../Assets/android-chrome-192x192.png";

const Navigation = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState(null);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    fetch(`http://localhost:1000/dbuser?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDbUser(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("accessToken");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:px-20 sm:px-5 bg-transparent shadow-2xl dark:bg-black dark:text-white">
      <Navbar id="navbar" fluid={true} rounded={true}>
        <Navbar.Collapse>
          <Link to={"/home"} active={true}>
            Home
          </Link>
          <>
            {" "}
            {dbUser && dbUser?.role === "user" ? (
              <Link to="/myorders">Dashboard</Link>
            ) : null}
          </>

          <>
            {dbUser && dbUser?.role === "seller" ? (
              <Link to={"/seller"}>Dashboard</Link>
            ) : null}
          </>
          <>
            {dbUser && dbUser?.role === "seller" ? (
              <Link to={"/seller/myproducts"}>My Products</Link>
            ) : null}
          </>
          <>
            {dbUser && dbUser?.role === "seller" ? (
              <Link to={"/seller/addproduct"}>Add Product</Link>
            ) : null}
          </>
          <Navbar.Link to="/blog">Blog</Navbar.Link>
        </Navbar.Collapse>

        <Navbar.Brand href="/">
          <div className="flex justify-start h-16 items-center">
            <img className="w-8 h-8" src={logo} alt="" />
            <h1 className="mx-3 text-2xl font-semibold ">Phone Pocket</h1>
          </div>
        </Navbar.Brand>
        <div className="flex ">
          <button
            onClick={handleThemeSwitch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded-full mx-2"
          >
            <small> {theme === "dark" ? "L" : "D"}</small>
          </button>
          {user ? (
            <>
              <button
                onClick={handleLogout}
                type="button"
                className="text-white hover:translate-y-1 hover:scale-110 duration-500 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button
                  type="button"
                  className="text-white hover:translate-y-1 hover:scale-110 duration-500 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button
                  type="button"
                  className="text-white hover:translate-y-1 hover:scale-110 duration-500 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Register
                </button>
              </Link>
            </>
          )}
          <div className="">
            <Tooltip content={user?.displayName}>
              <img
                className="w-11 h-11  rounded-full mx-3"
                src={user?.photoURL}
                alt=""
              />
            </Tooltip>
          </div>
        </div>
        <Navbar.Toggle />
      </Navbar>
    </div>
  );
};

export default Navigation;
