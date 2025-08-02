import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { format } from "date-fns";

const phoneNumberSchema = z
  .string()
  .nonempty({ message: "Mobile number is required" })
  .refine(
    (number) => {
      try {
        const phoneNumber = parsePhoneNumberFromString(number);
        return phoneNumber?.isValid();
      } catch {
        return false;
      }
    },
    { message: "Invalid phone number" }
  );

const privacyPolicySchema = z.boolean().refine(
  (val) => {
    return val === true;
  },
  { message: "Privacy policy must be accepted" }
);

const dobSchema = z.preprocess(
  (val) => {
    if (val instanceof Date && !isNaN(val.getTime())) {
      return format(val, "yyyy-MM-dd");
    }
    return val;
  },
  z.string().refine((val) => !isNaN(new Date(val).getTime()), {
    message: "Invalid date string",
  })
);

export const signupSchema = z.object({
  firstname: z.string().min(1, "Name is required"),
  lastname: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: phoneNumberSchema,
  password: z.string().min(1, "Password is required"),
  dob: dobSchema,
  privacyPolicy: privacyPolicySchema,
  marketingConsent: z.boolean(),
  referredBy: z.string().optional(),
});

export type SignupFormData = z.infer<typeof signupSchema>;
