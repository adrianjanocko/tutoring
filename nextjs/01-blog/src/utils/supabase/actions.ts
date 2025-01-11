"use server";

import { revalidatePath } from "next/cache";
import { loginSchema, registerSchema } from "../schemas";
import { LoginData, Post, RegisterData } from "../types";
import { createClient } from "./server";

// POSTS

interface PostsProps {
  delay?: number;
  limit?: number;
  sort?: string;
}

export async function getPosts({
  delay,
  limit = 10,
  sort = "asc",
}: PostsProps = {}): Promise<Post[]> {
  const supabase = await createClient();

  let { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .limit(limit);

  if (error) throw new Error("Data cannot be obtained.");
  if (!posts) return [];

  const sortedData = posts.sort((a: Post, b: Post) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    return sort === "desc"
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });

  return delay
    ? new Promise((resolve) => setTimeout(() => resolve(sortedData), delay))
    : sortedData;
}

export async function getPost(id: number): Promise<Post> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Data cannot be obtained.");

  return data;
}

// AUTHENTICATION

export async function registerUser(formData: RegisterData) {
  const validated = registerSchema.safeParse(formData);

  if (!validated.success)
    return { success: false, message: "Form must be valid." };

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: validated.data.email,
    password: validated.data.password,
  });

  if (error) return { success: false, message: "Registration failed." };

  revalidatePath("/");

  return { success: true, message: "Registration succeeded." };
}

export async function loginUser(formData: LoginData) {
  const validated = loginSchema.safeParse(formData);

  if (!validated.success)
    return { success: false, message: "Form must be valid." };

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: validated.data.email,
    password: validated.data.password,
  });

  if (error) return { success: false, message: "Login failed." };

  revalidatePath("/");

  return { success: true, message: "Login succeeded." };
}

export async function logoutUser() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) return { success: false, message: "Logout failed." };

  revalidatePath("/");

  return { success: true, message: "Logout succeeded." };
}
