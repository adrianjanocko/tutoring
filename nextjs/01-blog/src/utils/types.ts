import { z } from "zod";
import { loginSchema, registerSchema } from "./schemas";

export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  image: string;
  category: string;
  created_at: string;
}

export type ResponseMessage = {
  success: boolean;
  message: string;
};

export type RegisterData = z.infer<typeof registerSchema>;
export type LoginData = z.infer<typeof loginSchema>;
