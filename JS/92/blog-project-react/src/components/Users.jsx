import React, { useEffect, useState } from "react";
import { fetchData } from "../utils";

const Users = ({ changeView }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/users").then(setUsers);
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <button key={user.id} onClick={() => changeView("posts", user)}>
          {user.name}
        </button>
      ))}
    </div>
  );
};

export default Users;
