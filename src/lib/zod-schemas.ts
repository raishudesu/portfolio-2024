import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Enter a valid email" }),
  message: z
    .string({ required_error: "Message is required" })
    .min(5, { message: "Message should be at least 5 characters" })
    .max(250, { message: "Message should be less than 250 characters" }),
});
