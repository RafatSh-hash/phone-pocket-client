import React from "react";
import { useQuery } from "@tanstack/react-query";

import UserCard from "./UserCard";
import useTitle from "../../../Hooks/useTitle";

const AllUsers = () => {
  useTitle("All Users");
  //   const [users, setUsers] = useState([]);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://a-12-server.vercel.app/users");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  return (
    <div>
      <div>
        {users.map((user) => (
          <UserCard refetch={refetch} user={user} key={user._id}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
