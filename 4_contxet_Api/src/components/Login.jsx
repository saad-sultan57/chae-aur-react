import React, { useState, useContext } from "react";
import userContext from "../context/UserContext";

const Login = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const { setuser } = useContext(userContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ name, password });
  };

  return (
    <div>
      Login
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
