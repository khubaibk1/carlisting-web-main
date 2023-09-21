import React, { useState } from "react";
import Status from "./Status";
const { defaultHead } = require("next/head");

const SignUp = ({ Active, onClose }) => {
  const [close, setClose] = useState(false);
  const [activeStatus, setactiveStatus] = useState(false);
  const handleClose = () => {
    setClose(!close);
    onClose();
  };

  return (
    <>
      {Active && !close && (
        <div className="w-[558px] h-[297px] flex flex-col bg-white justify-center items-center absolute transform translate-x-[-145px] translate-y-[198px] overflow-hidden shadow-md">
          <button
            className="transform translate-x-[250px]"
            onClick={handleClose}
          >
            <svg
              className="text-[#09A122] w-[36px] h-[36px]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                fill="#09a122"
              ></path>{" "}
            </svg>
          </button>
          <p className="text-[20px] font-medium mb-[7px]">Create Account</p>
          <p className="text-[14px] mb-[10px]">
            Fill in your details to create an account
          </p>
          <form>
            <input
              className="border-b mb-[6px] border-gray-500 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
              id="email"
              type="text"
              placeholder="Email address"
            />

            <input
              className="border-b border-gray-500 appearance-none  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
              id="password"
              type="password"
              placeholder="Enter password"
            />
          </form>
          <button
            className="w-[350px] h-[48px] text-white bg-[#09A122] text-[20px] p-[5px] mb-[5px] mt-[14px] rounded-xl"
            onClick={() => setactiveStatus(!activeStatus)}
          >
            Sign Up
          </button>
          <p className="text-[12px]">
            By signing up, you agree to our{" "}
            <span className="text-[#09A122]">Terms of Service</span>.{" "}
          </p>
        </div>
      )}
      <Status Active={activeStatus} />
    </>
  );
};
export default SignUp;
