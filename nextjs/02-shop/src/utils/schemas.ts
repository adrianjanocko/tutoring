import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

export const registerSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }), // confirmPassword: z.string(),
});
// .refine((data) => {
//   data.password === data.confirmPassword,
//     {
//       path: ["confirmPassword"],
//       message: "Passwords do not match",
//     };
// });
