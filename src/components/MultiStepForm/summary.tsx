import { FormData } from "@/types/formData";

type SummaryProps = {
  data: FormData;
  onBack: () => void;
  onSubmit: () => void;
};

const Summary = ({ data, onBack, onSubmit }: SummaryProps) => {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Review Your Information
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

        <div className="mt-8 flex justify-between">
          <button
            onClick={onBack}
            className="py-2 px-4 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={onSubmit}
            className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
