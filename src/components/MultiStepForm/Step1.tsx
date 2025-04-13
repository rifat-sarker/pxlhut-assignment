"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataStep1 } from "@/types/formData";
import { step1Schema } from "@/schemas/step1Schema";

const Step1 = ({ onNext }: { onNext: (data: FormDataStep1) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataStep1>({
    resolver: zodResolver(step1Schema),
  });

  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Step 1: Personal Info
          <hr />
        </h1>
        <form onSubmit={handleSubmit(onNext)} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm   text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              {...register("fullName")}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm   text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm   text-gray-700 mb-2"
            >
              Phone
            </label>
            <input
              id="phone"
              {...register("phone")}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Step1;
