import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Tuna Ozmen",
      image: "https://miro.medium.com/max/1000/0*0TkUxCTJL4hEMT38.jpg",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};
export default Users;
