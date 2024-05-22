import { React, useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setlength] = useState(6);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const inputField = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Password Copy

  const copyPasswordToClip = useCallback(() => {
    inputField.current?.select();
    inputField.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-5 my-6  text-white bg-gray-600">
        <h3 className="text-white text-center mb-5">Password-Generator</h3>
        <div className="flex shadow-lg rounded-full overflow-hidden mb-4">
          <input
            ref={inputField}
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="p-3 w-full text-black outline-none border-0"
          />
          <button
            className="text-white px-6 py-3  bg-green-500 "
            onClick={copyPasswordToClip}
          >
            Copy
          </button>
        </div>

        <div className="flex gap-x-4 text-sm">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={5}
              max={20}
              value={length}
              onChange={(e) => {
                setlength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              value={length}
              onChange={(e) => {
                setnumberAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              value={length}
              onChange={(e) => {
                setcharAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
