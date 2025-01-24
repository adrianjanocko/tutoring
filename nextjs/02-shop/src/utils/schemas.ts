import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long." })
    .max(30, { message: "First name must be at most 30 characters long." })
    .regex(/^[A-Za-z]+$/, { message: "First name must contain only letters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long." })
    .max(30, { message: "Last name must be at most 30 characters long." })
    .regex(/^[A-Za-z]+$/, { message: "Last name must contain only letters." }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});
