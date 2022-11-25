import React from "react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import UserCard from "./UserCard";

const AllUsers = () => {
  //   const [users, setUsers] = useState([]);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:1000/users");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  return (
    <div>
      <div>
        {users.map((user) => (
          <UserCard user={user} key={user._id}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
