import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaPhone } from "react-icons/fa";
import Home from './index';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSignup = () => {
    alert("OTP sent to the registered email address.");
    setShowOtpModal(true);
    setIsForgotPassword(false);
  };

  const handleForgotPassword = () => {
    alert("OTP sent to the registered email address for password reset.");
    setShowOtpModal(true);
    setIsForgotPassword(true);
  };

  const handleOtpConfirmation = () => {
    if (isForgotPassword) {
      setOtpVerified(true);
      alert("OTP verified. Please enter your new password.");
    } else {
      alert("OTP confirmed. Redirecting to home page.");
      setShowOtpModal(false);
      setRedirectToHome(true);
    }
  };

  const handleChangePassword = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password changed successfully.");
    setShowOtpModal(false);
    setOtpVerified(false);
    setIsForgotPassword(false);  // Reset the flow for forgot password
  };

  if (redirectToHome) {
    return <Home />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl">
          <motion.div
            className="w-full md:w-3/5 p-5"
            initial={{ x: isLogin ? 0 : 10 }}
            animate={{ x: isLogin ? 0 : -10 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="text-left font-bold">logo</div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-quinary mb-2">
                {isLogin ? "Sign In to Account" : "Create an Account"}
              </h2>
              <div className="border-2 w-10 border-quinary inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-quinary my-3">or use your email account</p>
              {isLogin ? (
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 w-full md:w-64 p-2 flex items-center mb-3">
                    <FaEnvelope className="text-gray-400 m-2" />
                    <input className="bg-gray-200 outline-none text-sm flex-1" type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="bg-gray-200 w-full md:w-64 p-2 flex items-center mb-3">
                    <FaLock className="text-gray-400 m-2" />
                    <input className="bg-gray-200 outline-none text-sm flex-1" type={showPassword ? "text" : "password"} name="password" placeholder="Password" />
                    <div onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEye className="text-gray-400 hover:cursor-pointer m-1" /> : <FaEyeSlash className="text-gray-400 hover:cursor-pointer m-1" />}
                    </div>
                  </div>
                  <div className="flex justify-between w-full md:w-64 mb-5">
                    <label className="flex items-center text-xs ">
                      <input className="mr-1" type="checkbox" name="remember" />
                      Remember me
                    </label>
                    <a href="#" className="text-xs" onClick={handleForgotPassword}>Forgot Password</a>
                  </div>
                  <a href="#" className="border-2 border-quinary text-quinary rounded-full px-12 py-2 inline-block font-semibold hover:bg-quinary hover:text-white mt-5">
                    Sign In
                  </a>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 w-full md:w-64 p-2 flex items-center mb-3">
                    <FaUser className="text-gray-400 m-2" />
                    <input className="bg-gray-200 outline-none text-sm flex-1" type="text" name="name" placeholder="Name" />
                  </div>
                  <div className="bg-gray-200 w-full md:w-64 p-2 flex items-center mb-3">
                    <FaEnvelope className="text-gray-400 m-2" />
                    <input className="bg-gray-200 outline-none text-sm flex-1" type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="bg-gray-200 w-full md:w-64 p-2 flex items-center mb-3">
                    <FaPhone className="text-gray-400 m-2" />
                    <input className="bg-gray-200 outline-none text-sm flex-1" type="tel" name="mobile" placeholder="Mobile" />
                  </div>
                  <div className="bg-gray-200 w-full md:w-64 p-2 flex items-center mb-3">
                    <FaLock className="text-gray-400 m-2" />
                    <input className="bg-gray-200 outline-none text-sm flex-1" type={showPassword ? "text" : "password"} name="password" placeholder="Password" />
                    <div onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEye className="text-gray-400 hover:cursor-pointer m-1" /> : <FaEyeSlash className="text-gray-400 hover:cursor-pointer m-1" />}
                    </div>
                  </div>
                  <div className="bg-gray-200 w-full md:w-64 p-2 flex items-center mb-3">
                    <FaLock className="text-gray-400 m-2" />
                    <input className="bg-gray-200 outline-none text-sm flex-1" type={showPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" />
                  </div>
                  <a href="#" className="border-2 border-quinary text-quinary rounded-full px-12 py-2 inline-block font-semibold hover:bg-quinary hover:text-white mt-5" onClick={handleSignup}>
                    Create
                  </a>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-2/5 bg-quinary text-white rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl py-12 px-12 flex flex-col justify-center items-center"
            initial={{ x: isLogin ? -10 : 0 }}
            animate={{ x: isLogin ? 0 : 10 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <h2 className="text-3xl font-bold mb-2">{isLogin ? "Hello, Friend!" : "Welcome Back!"}</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">{isLogin ? "Enter your personal details and start your journey with us" : "To keep connected with us, please login with your personal info"}</p>
            <motion.button
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-quinary"
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {showOtpModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-quinary mb-2">OTP Verification</h2>
            <div className="border-2 w-10 border-quinary inline-block mb-2"></div>
            {!otpVerified && (
              <>
                <p className="text-quinary my-3">Please enter the OTP sent to your email address</p>
                <div className="bg-gray-200 w-full md:w-64 p-2 flex items-center mb-3">
                  <FaEnvelope className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-200 outline-none text-sm flex-1"
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <a
                  href="#"
                  className="border-2 border-quinary text-quinary rounded-full px-12 py-2 inline-block font-semibold hover:bg-quinary hover:text-white mt-5"
                  onClick={handleOtpConfirmation}
                >
                  Verify OTP
                </a>
              </>
            )}
            {otpVerified && isForgotPassword && (
              <div className="mt-5">
                <h2 className="text-2xl font-bold text-quinary mb-2">Change Password</h2>
                <div className="bg-gray-200 w-full md:w-64 p-2 flex items-center mb-3">
                  <FaLock className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-200 outline-none text-sm flex-1"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="bg-gray-200 w-full md:w-64 p-2 flex items-center mb-3">
                  <FaLock className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-200 outline-none text-sm flex-1"
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <a
                  href="#"
                  className="border-2 border-quinary text-quinary rounded-full px-12 py-2 inline-block font-semibold hover:bg-quinary hover:text-white mt-5"
                  onClick={handleChangePassword}
                >
                  Submit
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
