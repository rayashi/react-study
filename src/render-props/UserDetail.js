import React from "react";
import ContentLoader from "./ContentLoader";

import { useParams } from "react-router-dom";

export default ({ userId }) => {
  let { id } = useParams();

  const getUserDetail = async () => {
    return await (
      await fetch(`https://reqres.in/api/users/${id}?delay=1`)
    ).json();
  };

  return (
    <ContentLoader
      getContent={getUserDetail}
      render={(user) => (
        <div>
          <p>{user?.data?.first_name}</p>
          <p>{user?.data?.email}</p>
        </div>
      )}
    />
  );
};
