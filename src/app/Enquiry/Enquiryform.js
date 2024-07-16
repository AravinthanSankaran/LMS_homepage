"use client";

import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";

const EnquiryForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/", data);
      console.log(response);
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto my-10">
      {isSubmitted ? (
        <div className="max-w-md mx-auto p-4 border rounded shadow  bg-green-100 text-green-700">
          <h2 className="text-xl font-bold text-center mb-4">Success!</h2>
          <p className="text-center">
            Your Enquiry has been successfully submitted.
          </p>
        </div>
      ) : (
        <form
          action="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto p-4 border rounded shadow"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Enquiry Form</h2>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="username"
              placeholder="Name"
              {...register("username", {
                required: "username is required",
                minLength: {
                  value: 3,
                  message: "Password must be more than 3 characters",
                },
              })}
              className="w-full p-2 border rounded"
            />
            <p className="text-red-500">{errors.username?.message}</p>
          </div>
          <div className="mb-4">
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
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Notes</label>
            <textarea
              name="notes"
              {...register("notes", {
                required: "Notes is required",
              })}
              className="w-full p-2 border rounded"
            ></textarea>
            <p className="text-red-500">{errors.notes?.message}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default EnquiryForm;
