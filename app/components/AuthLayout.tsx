import React from "react";
import logo from "../assets/Netflix_2015_logo.svg";
import loginBackground from "../assets/login.jpg";

const AuthLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="relative flex justify-center items-center h-screen w-screen">
      <img
        src={logo}
        className="absolute w-32 z-10 left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
      />
      <img
        src={loginBackground}
        alt="background"
        className="absolute -z10 h-full w-full"
      />
      <main className="relative max-w-sm w-full">{props.children}</main>
    </div>
  );
};

export default AuthLayout;
