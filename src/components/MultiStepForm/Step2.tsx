"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, FormDataStep2 } from "@/types/formData";
import { step2Schema } from "@/schemas/step2Schema";

const Step2 = ({
  onNext,
  onBack,
  formData
}: {
  onNext: (data: FormDataStep2) => void;
  onBack: () => void;
  formData: FormData;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataStep2>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      address: formData.address,
      zip: formData.zip,
    },
  });

  return (
    <div className="flex items-center justify-center dark:bg-gray-900 bg-gray-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
          Step 2: Address Details
          <hr />
        </h1>
        <form onSubmit={handleSubmit(onNext)} className="space-y-6">
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Address
            </label>
            <input
              id="address"
              {...register("address")}
              placeholder="Enter your Address"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Zip Code
            </label>
            <input
              id="zip"
              {...register("zip")}
              placeholder="Enter your zip code"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
            />
            {errors.zip && (
              <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
            )}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onBack}
              className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Previous
            </button>
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
export default Step2;
