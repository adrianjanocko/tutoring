"use server";

import { createClient } from "./supabase/server";
import { Post } from "./types";

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
