import { useSubmitFormDataMutation } from "@/redux/features/apiSlice";
import { FormData } from "@/types/formData";;

type SummaryProps = {
  data: FormData;
  onBack: () => void;
  onSubmit: () => void;
};

const Summary = ({ data, onBack, onSubmit }: SummaryProps) => {
  const [submitForm, { isLoading, isError, isSuccess }] =
    useSubmitFormDataMutation();


  const handleFinalSubmit = async () => {
    try {
      const result = await submitForm(data).unwrap();
      console.log("Form submitted successfully:", result);
      onSubmit();
    } catch (err) {
      console.error("Form submission failed:", err);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Review Your Information
          <hr />
        </h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <strong>Full Name:</strong> {data.fullName}
          </div>
          <div>
            <strong>Email:</strong> {data.email}
          </div>
          <div>
            <strong>Phone:</strong> {data.phone}
          </div>
          <div>
            <strong>Address:</strong> {data.address}
          </div>
          <div>
            <strong>Zip Code:</strong> {data.zip}
          </div>
          <div>
            <strong>Username:</strong> {data.username}
          </div>
          <div>
            <strong>Password:</strong> {"•".repeat(data.password.length)}
          </div>
        </div>

        {isError && (
          <p className="text-red-500 text-sm mt-4">
            Failed to submit form. Please try again.
          </p>
        )}
        {isSuccess && (
          <p className="text-green-500 text-sm mt-4">
            Form submitted successfully!
          </p>
        )}

        <div className="mt-8 flex justify-between">
          <button
            onClick={onBack}
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Previous
          </button>
          <button
            onClick={handleFinalSubmit}
            className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
