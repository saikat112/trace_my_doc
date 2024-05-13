import GoogleIcon from "@mui/icons-material/Google";
import React, { useState } from "react";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

export default function login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            {/* sing in */}
            {/* logo shouls be added  */}
            <div className="text-left font-bold">logo</div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-quinary md-2">
                sing in to Account
              </h2>
              <div className="border-2 w-10 border-quinary inline-block md-2"></div>
              <div className=" flex justify-center my-2">
                <a
                  href="#"
                  className=" border-2 broder-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              {/*login section*/}
              <p className="text-quinary my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                  <FaEnvelope className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-200 outline-none text-sm flex-1"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                  <FaLock className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-200 outline-none text-sm flex-1"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                  />
                  <div onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <FaEye className="text-gray-400 m-2" />
                    ) : (
                      <FaEyeSlash className="text-gray-400 m-2" />
                    )}
                  </div>
                </div>
                <div className="flex justify-between w-64 md-5">
                  <label className="flex item-center text-xs">
                    <input className="mr-1" type="checkbox" name="remember" />
                    remember me
                  </label>
                  <a href="#" className="text-xs">Forgot Password</a>
                </div>

              </div>
            </div>
          </div>
          <div className=" w-2/3 bg-quinary text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            {/* sing up section */}
            <h2 className="text-3xl font-bold md">hy every one </h2>
            <div className="border-2 w-10 broder-white inline-block md-2"></div>
            <p className="md-10">tract your docoment with us</p>
            {/* singup hover should be chnage */}
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-quinary "
            >
              Sing Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
