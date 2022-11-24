import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/Context";
import SmallSpinner from "../../../Utilities/SmallSpinner/SmallSpinner";

const AddProduct = () => {
  const { loading } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddProduct = (data) => {
    console.log(data);
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
            {errors.name && (
              <p className="text-red-500 text-center">{errors.name?.message}</p>
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
            {errors.name && (
              <p className="text-red-500 text-center">{errors.name?.message}</p>
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
            {errors.name && (
              <p className="text-red-500 text-center">{errors.name?.message}</p>
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
            {errors.name && (
              <p className="text-red-500 text-center">{errors.name?.message}</p>
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
            {errors.name && (
              <p className="text-red-500 text-center">{errors.name?.message}</p>
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
            {errors.name && (
              <p className="text-red-500 text-center">{errors.name?.message}</p>
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
            {errors.name && (
              <p className="text-red-500 text-center">{errors.name?.message}</p>
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
            Select a Brand
          </label>
          <select
            id="name"
            name="name"
            {...register("name")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="google">Google</option>
            <option value="samsung">Samsung</option>
            <option value="iphone">iPhone</option>
          </select>

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
