import React from "react";
import GoogleIcon from '@mui/icons-material/Google';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            {/* sing in */}
            {/* logo shouls be added  */}
            <div className="text-left font-bold">logo</div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-quinary md-2">sing in to Account</h2>
              <div className="border-2 w-10 border-quinary inline-block md-2"></div>
              <div className=" flex justify-center my-2">
                <a href="#" className=" border-2 broder-gray-200 rounded-full p-3 mx-1"> <FaGoogle className="text-sm"/>
                </a>
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
