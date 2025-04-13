"use client";

import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import {
  FormDataStep1,
  FormDataStep2,
  FormDataStep3,
  FormData,
} from "@/types/formData";
import Summary from "./summary";

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const updateForm = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="flex items-center justify-center p-5 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="rounded-lg shadow-lg w-full max-w-md">
        {step === 0 && (
          <Step1
            onNext={(data: FormDataStep1) => {
              updateForm(data);
              handleNext();
            }}
            formData={formData} // Pass formData to Step1
          />
        )}
        {step === 1 && (
          <Step2
            onNext={(data: FormDataStep2) => {
              updateForm(data);
              handleNext();
            }}
            onBack={handleBack}
            formData={formData} // Pass formData to Step2
          />
        )}
        {step === 2 && (
          <Step3
            onNext={(data: FormDataStep3) => {
              updateForm(data);
              handleNext();
            }}
            onBack={handleBack}
            formData={formData} // Pass formData to Step3
          />
        )}
        {step === 3 && (
          <Summary
            data={formData}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
