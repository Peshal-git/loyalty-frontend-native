import { z } from "zod";
import { signupSchema } from "./signup.schema";

export const editUserSchema = signupSchema
  .omit({
    privacyPolicy: true,
    marketingConsent: true,
    referredBy: true,
    password: true,
  })
  .extend({});
export type EditUserFormData = z.infer<typeof editUserSchema>;
