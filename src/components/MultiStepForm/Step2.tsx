"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataStep2 } from "@/types/formData";
import { step2Schema } from "@/schemas/step2Schema";

const Step2 = ({
  onNext,
  onBack,
}: {
  onNext: (data: FormDataStep2) => void;
  onBack: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataStep2>({
    resolver: zodResolver(step2Schema),
  });

  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Step 2: Address Details
          <hr />
        </h1>
        <form onSubmit={handleSubmit(onNext)} className="space-y-6">
          <div>
            <label
              htmlFor="address"
              className="block text-sm   text-gray-700 mb-2"
            >
              Address
            </label>
            <input
              id="address"
              {...register("address")}
              placeholder="Enter your Address"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="zip" className="block text-sm   text-gray-700 mb-2">
              Zip Code
            </label>
            <input
              id="zip"
              {...register("zip")}
              placeholder="Enter your zip code"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
