import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

function Github() {
  //   const data = useLoaderData();
  const [data, setData] = useState({});
  useEffect(() => {
    try {
      fetch("https://api.github.com/users/priya171299")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }, []);
  return (
    <div className=" text-3xl text-center bg-gray-700 p-4 text-white">
      Github Followers : {data.followers}
      <div className="flex justify-center items-center p-4">
        <img src={data.avatar_url} alt="git picture" width={300} />
      </div>
    </div>
  );
}

export default Github;

// export const githubInfoLoader = async () => {
//   const response = await fetch("https://api.github.com/users/priya171299");
//   return response.json();
// };
