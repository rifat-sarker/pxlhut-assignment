import { z } from "zod";

export const step2Schema = z.object({
  address: z.string().min(1, "Address is required"),
  zip: z.string().regex(/^\d{5}$/, "Zip code must be exactly 5 digits"),
});
