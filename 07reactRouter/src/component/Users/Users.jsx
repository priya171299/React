import React from "react";
import { useParams } from "react-router-dom";

function Users() {
  const { userId } = useParams();
  return (
    <div className="text-center text-3xl bg-gray-600 text-white p-4">
      User : {userId}
    </div>
  );
}

export default Users;
