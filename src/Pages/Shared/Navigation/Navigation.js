import { Navbar, Tooltip } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";
import logo from "../../../Assets/android-chrome-192x192.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { FaBeer, FaUserAlt } from "react-icons/fa";
import N from "../../../Assets/user.png";

const Navigation = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState({});
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

  // const { data: dbUser = {} } = useQuery({
  //   queryKey: ["dbuser", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:1000/dbuser?email=${user?.email}`
  //     );
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  useEffect(() => {
    fetch(`http://localhost:1000/dbuser?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDbUser(data);
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
        <Navbar.Brand href="/">
          <div className="flex justify-start h-16 items-center">
            <img className="w-8 h-8" src={logo} alt="" />
            <h1 className="mx-3 text-2xl font-semibold ">Phone Pocket</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Link to={"/home"} active={true}>
            Home
          </Link>
          <>
            {dbUser && dbUser?.role === "admin" ? (
              <Link to="/admin/allusers">All Users</Link>
            ) : null}
          </>
          <>
            {dbUser && dbUser?.role === "admin" ? (
              <Link to="/admin/allsellers">All Sellers</Link>
            ) : null}
          </>
          <>
            {" "}
            {dbUser && dbUser?.role === "user" ? (
              <Link to="/myorders">Dashboard</Link>
            ) : null}
          </>
          <>
            {" "}
            {dbUser && dbUser?.role === "user" ? (
              <Link to="/mywishlist">My Wishlist</Link>
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
          <Link to="/contactus">Contact Us</Link>
          <Link to="/blog">Blog</Link>
        </Navbar.Collapse>

        <div className="flex ">
          <button
            onClick={handleThemeSwitch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded-full mx-2"
          >
            <p> {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}</p>
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
            <Tooltip content={dbUser?.name}>
              <img
                className="w-11 h-11 hover:translate-y-1 hover:scale-110 duration-500 rounded-full mx-3"
                src={user?.photoURL ? user.photoURL : null}
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
