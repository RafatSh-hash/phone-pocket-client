import React, { useContext } from "react";
import Lottie from "lottie-react";
import registration from "../../Assets/registration.json";
//import Spinner from "../../Utilities/Spinner/Spinner.js";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/Context";
import { useState } from "react";
import SmallSpinner from "../../Utilities/SmallSpinner/SmallSpinner";
import useToken from "../../Hooks/useToken";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const { createUser, updateUserProfile, loading, setLoading } =
    useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [token] = useToken(userEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = "3fceca49b999da3171beae4a3e9eb312";

  const handleSignUp = (data) => {
    console.log(data);
    setLoading(true);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?&key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const profile = {
            name: data.name,
            email: data.email,
            photoURL: imgData.data.url,
            role: data.role,
          };
          console.log(profile);
          updateUserProfile(profile)
            .then(() => {
              console.log(profile.name, profile.email, profile.role);
              saveUser(profile.name, profile.email, profile.role);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });

    const saveUser = (name, email, role) => {
      const user = { name, email, role };
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
          setUserEmail(user.email);
        });
    };
  };
  return (
    <div className=" dark:text-white">
      <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col w-11/12 mt-10 mx-auto h-auto items-center justify-evenly">
        <div className="lg:w-1/2 md:w-1/3 sm:w-full p-8 hover:-translate-y-1 hover:scale-110 duration-500">
          <Lottie animationData={registration} loop={true} />
        </div>
        <div className="lg:w-2/3 md:w-1/4 sm:w-full">
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className=" border w-[60%] mx-auto bg-gray-200 dark:bg-gray-600 dark:text-white border-blue-500 py-5 px-5 shadow-lg hover:shadow-2xl rounded-2xl "
          >
            <div className="form-control w-full my-7">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                  maxLength: 20,
                })}
                type="text"
                className="input input-bordered dark:bg-gray-600 dark:text-white w-full  rounded-lg"
              />
              {errors.name && (
                <p className="text-red-500 text-center">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full my-7">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email address is required",
                  maxLength: 20,
                })}
                type="text"
                className="input input-bordered w-full dark:bg-slate-500 dark:text-white rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-center">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full my-7">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password address is required",
                  maxLength: 20,
                })}
                type="password"
                className="input input-bordered w-full dark:bg-slate-500 dark:text-white rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-center">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full my-7">
              <label className="label">
                <span className="label-text">Your Image</span>
              </label>
              <input
                {...register("image", {
                  required: "Photo is required",
                  maxLength: 20,
                })}
                type="file"
                className="input input-bordered w-full my-5 dark:bg-slate-500 dark:text-white rounded-lg"
              />
              {errors.image && (
                <p className="text-red-500 text-center">
                  {errors.image?.message}
                </p>
              )}
            </div>
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a Role
            </label>
            <select
              id="role"
              name="role"
              {...register("role")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="user">User</option>
              <option value="seller">Seller</option>
            </select>

            <div className="my-3">
              <button
                type="submit"
                className="text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {loading ? <SmallSpinner></SmallSpinner> : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
