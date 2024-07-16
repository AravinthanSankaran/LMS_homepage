"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [userType, setUserType] = useState("student");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(
      `${userType.charAt(0).toUpperCase() +
        userType.slice(1)} successfully logged in.`
    );
    window.location.href = "/"; // Redirect to home page
    setIsLoggedIn(true);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setUserType("student")}
          className={`px-4 py-2 ${
            userType === "student" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Student
        </button>
        <button
          onClick={() => setUserType("faculty")}
          className={`px-4 py-2 ml-2 ${
            userType === "faculty" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Faculty
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4 border rounded shadow"
      >
        <div className="mb-4">
          <h2 className="text-xl font-bold text-center mb-4">
            {userType === "student" ? "Student Login" : "Faculty Login"}
          </h2>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "This is not a valid email",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password must be at least 5 characters long",
              },
              maxLength: {
                value: 10,
                message: "Password must be at most 10 characters long",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
