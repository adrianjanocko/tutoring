"use server";

import { revalidatePath } from "next/cache";
import { loginSchema, registerSchema } from "../schemas";
import { LoginData, RegisterData } from "../types";
import { createClient } from "./server";

export async function registerUser(formData: RegisterData) {
  const validate = registerSchema.safeParse(formData);

  if (!validate.success) {
    return { success: false, message: "Form must be valid" };
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: validate.data.email,
    password: validate.data.password,
  });

  if (error) return { success: false, message: "Registration failed" };

  revalidatePath("/");

  return { success: true, message: "Registration successful" };
}

export async function loginUser(formData: LoginData) {
  const validate = loginSchema.safeParse(formData);

  if (!validate.success) {
    return { success: false, message: "Form must be valid" };
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: validate.data.email,
    password: validate.data.password,
  });

  if (error) return { success: false, message: "Login failed" };

  revalidatePath("/");

  return { success: true, message: "Login successful" };
}

export async function logoutUser() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) return { success: false, message: "Logout failed" };

  revalidatePath("/");

  return { success: true, message: "Logout successful" };
}
