"use client"
import React,{useState} from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
const Profile = ({Active, onClose}) => {
    const [activeSignUp,setactiveSignUp]=useState(false)
    const [activeSignIn,setactiveSignIn]=useState(false)
    const handleSignInClose = () => {
        setactiveSignIn(false);
        setactiveSignUp(false);
        onClose();
      };
  return (
    <>
    {Active&&
    <div className="w-[521px] h-[255px] bg-white pt-[36px] pl-[48px] absolute transform translate-x-[-111px] translate-y-[179px] overflow-hidden shadow-md">
      <p className="text-[#672797] text-[20px] font-semibold">Profile</p>
      <button className="flex flex-row w-[218px] h-[50px] mt-[15px] ml-[12px]"
     onClick={() => {
        setactiveSignIn(!activeSignIn);
        if (activeSignIn) {
          setactiveSignIn(false);
          setactiveSignUp(false);
        }
      }}
      >
        <span className="text-black ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 12C13.5913 12 15.1174 11.3679 16.2426 10.2426C17.3679 9.11742 18 7.5913 18 6C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6C6 7.5913 6.63214 9.11742 7.75736 10.2426C8.88258 11.3679 10.4087 12 12 12ZM16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6ZM24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.992C21.998 21.5 21.692 20.02 20.336 18.664C19.032 17.36 16.578 16 12 16C7.42 16 4.968 17.36 3.664 18.664C2.308 20.02 2.004 21.5 2 21.992H22Z"
              fill="#8552AC"
            />
          </svg>
        </span>
        <p className="pl-[15px]">Sign in</p>
      </button>
      <button className="flex flex-row  w-[218px] h-[50px]  ml-[12px]" onClick={() => setactiveSignUp(!activeSignUp)} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 12C13.5913 12 15.1174 11.3679 16.2426 10.2426C17.3679 9.11742 18 7.5913 18 6C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6C6 7.5913 6.63214 9.11742 7.75736 10.2426C8.88258 11.3679 10.4087 12 12 12ZM16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6ZM24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.992C21.998 21.5 21.692 20.02 20.336 18.664C19.032 17.36 16.578 16 12 16C7.42 16 4.968 17.36 3.664 18.664C2.308 20.02 2.004 21.5 2 21.992H22Z"
            fill="#8552AC"
          />
        </svg>
        <p className="pl-[15px]">Create an account</p>
      </button>
    </div>
    }
    <SignUp Active={activeSignUp} onClose={handleSignInClose}/>
    <SignIn Active={activeSignIn} onClose={handleSignInClose}/>
    </>
  );
};

export default Profile;
