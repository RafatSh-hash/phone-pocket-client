import { Button } from "flowbite-react";
import React from "react";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="w-3/5 shadow-2xl rounded-2xl mx-auto border-2 bg-gray-200 dark:bg-white dark:text-black border-black p-5 my-5 flex items-center justify-between">
      <div className="flex justify-between w-1/2">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
      <div>
        <Button gradientMonochrome="failure">Delete</Button>
      </div>
    </div>
  );
};

export default UserCard;
