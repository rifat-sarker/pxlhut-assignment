"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, FormDataStep1 } from "@/types/formData";
import { step1Schema } from "@/schemas/step1Schema";

const Step1 = ({
  onNext,
  formData,
}: {
  onNext: (data: FormDataStep1) => void;
  formData: FormData;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataStep1>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
    },
  });

  return (
    <div className="flex items-center justify-center dark:bg-gray-900 bg-gray-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
          Step 1: Personal Info
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
        </h1>
        <form onSubmit={handleSubmit(onNext)} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              {...register("fullName")}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
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
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email")}
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
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
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Phone
            </label>
            <input
              id="phone"
              {...register("phone")}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
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
