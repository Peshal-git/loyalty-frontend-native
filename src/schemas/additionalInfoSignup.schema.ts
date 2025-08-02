import { z } from "zod";
import { signupSchema } from "./signup.schema";

export const additionalInfoSignupSchema = signupSchema
  .omit({
    firstname: true,
    lastname: true,
    email: true,
  })
  .extend({});
export type AdditionalInfoSignupFormData = z.infer<
  typeof additionalInfoSignupSchema
>;
