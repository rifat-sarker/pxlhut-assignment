export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  zip: number;
  username: string;
  password: string;
  confirmPassword: string;
};

export type FormDataStep1 = Pick<FormData, "fullName" | "email" | "phone">;
export type FormDataStep2 = Pick<FormData, "address" | "zip">;
export type FormDataStep3 = Pick<FormData, "username" | "password" | "confirmPassword">;
