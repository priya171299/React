import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  //useState
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  //useCallback
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()-_+={}[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numAllowed, charAllowed, setpassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //useEffect
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  //useRef
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 text-white ouline-none py-0.5 px-3 rounded-lg shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 py-3">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="" className="text-white">
              Length:{length}
            </label>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                onChange={() => {
                  setnumAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput" className="text-white">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput" className="text-white">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
