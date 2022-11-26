import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/Context";
import SmallSpinner from "../../../Utilities/SmallSpinner/SmallSpinner";
import Spinner from "../../../Utilities/Spinner/Spinner";

const AddProduct = () => {
  const { loading, user } = useContext(AuthContext);
  //   const [CatergoryId, setCatergoryId] = useState(null);
  console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddProduct = (data) => {
    const imgHostKey = "3fceca49b999da3171beae4a3e9eb312";
    const date = new Date();
    // console.log(date);

    const image = data.thumbnail[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?&key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            brand: data.brand,
            name: data.name,
            CatId: parseInt(data.CatId),
            IPrice: data.IPrice,
            APrice: data.APrice,
            Ram: data.Ram,
            Storage: data.Storage,
            Battery: data.Battery,
            Condition: data.Condition,
            thumbnail: imgData.data.url,
            location: data.Location,
            postDate: date.toString().slice(0, 15),
            sellerName: data.sellerName,
            sellerEmail: user?.email,
          };
          //   if (data.brand === "google") {
          //     setCatergoryId(1);
          //   }
          //   if (data.brand === "samsung") {
          //     setCatergoryId(2);
          //   }
          //   if (data.brand === "iphone") {
          //     setCatergoryId(3);
          //   }
          console.log(product);
          fetch("http://localhost:1000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };

  return (
    <div>
      <div className="lg:w-2/3 md:w-1/4 sm:w-full mx-auto my-10">
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className=" border lg:w-[60%] sm:w-[95%] mx-auto bg-gray-200 dark:bg-gray-600 dark:text-white border-blue-500 py-5 px-5 shadow-lg hover:shadow-2xl rounded-2xl "
        >
          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              {...register("sellerName", {
                required: "sellerName is required",
                maxLength: 20,
              })}
              type="text"
              className="input input-bordered dark:bg-gray-600 dark:text-white w-full  rounded-lg"
            />
            {errors.sellerName && (
              <p className="text-red-500 text-center">
                {errors.sellerName?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text">Initial Price</span>
            </label>
            <input
              {...register("IPrice", {
                required: "Initial Price is required",
                maxLength: 20,
              })}
              type="text"
              className="input input-bordered dark:bg-gray-600 dark:text-white w-full  rounded-lg"
            />
            {errors.IPrice && (
              <p className="text-red-500 text-center">
                {errors.IPrice?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text">Your Asking Price</span>
            </label>
            <input
              {...register("APrice", {
                required: "Asking Price is required",
                maxLength: 20,
              })}
              type="text"
              className="input input-bordered dark:bg-gray-600 dark:text-white w-full  rounded-lg"
            />
            {errors.APrice && (
              <p className="text-red-500 text-center">
                {errors.APrice?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text">Device Memory</span>
            </label>
            <input
              {...register("Ram", {
                required: "Ram is required",
                maxLength: 20,
              })}
              type="text"
              className="input input-bordered dark:bg-gray-600 dark:text-white w-full  rounded-lg"
            />
            {errors.Ram && (
              <p className="text-red-500 text-center">{errors.Ram?.message}</p>
            )}
          </div>
          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text">Device Storage</span>
            </label>
            <input
              {...register("Storage", {
                required: "Storage is required",
                maxLength: 20,
              })}
              type="text"
              className="input input-bordered dark:bg-gray-600 dark:text-white w-full  rounded-lg"
            />
            {errors.Storage && (
              <p className="text-red-500 text-center">
                {errors.Storage?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text">Battery Capacity</span>
            </label>
            <input
              {...register("Battery", {
                required: "Battery Capacity is required",
                maxLength: 20,
              })}
              type="text"
              className="input input-bordered dark:bg-gray-600 dark:text-white w-full  rounded-lg"
            />
            {errors.Battery && (
              <p className="text-red-500 text-center">
                {errors.Battery?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text">Device Condition</span>
            </label>
            <input
              {...register("Condition", {
                required: "Device Condition is required",
                maxLength: 20,
              })}
              type="text"
              className="input input-bordered dark:bg-gray-600 dark:text-white w-full  rounded-lg"
            />
            {errors.Condition && (
              <p className="text-red-500 text-center">
                {errors.Condition?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text">Your Location</span>
            </label>
            <input
              {...register("Location", {
                required: "Seller Location is required",
                maxLength: 20,
              })}
              type="text"
              className="input input-bordered dark:bg-gray-600 dark:text-white w-full  rounded-lg"
            />
            {errors.Location && (
              <p className="text-red-500 text-center">
                {errors.Location?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text">Device Name</span>
            </label>
            <input
              {...register("name", {
                required: "Device Name is required",
                maxLength: 20,
              })}
              type="text"
              className="input input-bordered dark:bg-gray-600 dark:text-white w-full  rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-center">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full my-7">
            <label className="label">
              <span className="label-text">Product Thumbnail</span>
            </label>
            <input
              {...register("thumbnail", {
                required: "Photo is required",
                maxLength: 20,
              })}
              type="file"
              className="input input-bordered w-full my-5 dark:bg-slate-500 dark:text-white rounded-lg"
            />
            {errors.thumbnail && (
              <p className="text-red-500 text-center">
                {errors.thumbnail?.message}
              </p>
            )}
          </div>
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a Brand
          </label>
          <select
            id="name"
            name="brand"
            {...register("brand")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="google">Google</option>
            <option value="samsung">Samsung</option>
            <option value="iphone">Iphone</option>
          </select>
          <p className="text-sm my-4 text-center font-semibold text-red-500">
            Choose Category 1 for Google,Category 2 for Samsung,Category 3 for
            Iphone
          </p>
          <div className="flex justify-evenly">
            <div>
              <input type="radio" value="1" {...register("CatId")} />1
            </div>
            <div>
              <input type="radio" value="2" {...register("CatId")} />2{" "}
            </div>
            <div>
              <input type="radio" value="3" {...register("CatId")} />3
            </div>
          </div>
          <div className="my-3">
            <button
              type="submit"
              className="text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {loading ? <SmallSpinner></SmallSpinner> : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
