import { Button } from "flowbite-react";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const UserCard = ({ user, refetch }) => {
  AOS.init({ duration: 500 });
  const handleDeleteUser = () => {
    fetch(`https://a-12-server.vercel.app/users/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };

  console.log(user);
  return (
    <div
      data-aos="fade-right"
      className="w-3/5 shadow-2xl rounded-2xl mx-auto border-2 bg-gray-200 dark:bg-white dark:text-black border-black p-5 my-5 flex items-center justify-between"
    >
      <div className="flex justify-between w-1/2">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <div>
        <Button
          onClick={() => handleDeleteUser(user)}
          gradientMonochrome="failure"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
