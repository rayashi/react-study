import React from "react";
import ContentLoader from "./ContentLoader";
import { Link } from "react-router-dom";

export default () => {
  const getUsers = async () => {
    return await (await fetch("https://reqres.in/api/users?delay=1")).json();
  };

  return (
    <ContentLoader
      getContent={getUsers}
      render={(users) => (
        <div className="user-list">
          {users?.data?.map((user) => (
            <Link to={`/users/${user.id}`}>
              <img className="avatar" alt={user.id} src={user.avatar} />
            </Link>
          ))}
        </div>
      )}
    />
  );
};
