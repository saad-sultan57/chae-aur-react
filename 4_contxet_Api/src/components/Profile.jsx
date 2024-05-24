import React, { useContext } from "react";
import userContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(userContext);

  return (
    <>
      <h1>Profile</h1>
      {!user ? <div>Please Login</div> : <div>Welcome {user.name}</div>}
    </>
  );
};

export default Profile;
