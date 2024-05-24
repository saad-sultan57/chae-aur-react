import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary").then((response) =>
      response.json().then((data) => {
        console.log(data);
        setdata(data);
      })
    );
  }, []);

  return (
    <div className=" flex justify-center flex-col items-center p-5 bg-black text-white ">
      <h2>Github Followers: {data.followers}</h2>
      <img
        src={data.avatar_url}
        alt=""
        srcset=""
        className="w-20 rounded-full"
      />
    </div>
  );
};

export default Github;
