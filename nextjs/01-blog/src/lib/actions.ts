"use server";

import { Post } from "./types";
import { parseDate } from "./utils";

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
  const response = await fetch("https://jsonplaceholder.org/posts");

  if (!response.ok) throw new Error("Data could not be obtained.");

  const data = await response.json();

  const slicedData = data.slice(0, limit);

  const sortedData = slicedData.sort((a: Post, b: Post) => {
    const dateA = parseDate(a.publishedAt);
    const dateB = parseDate(b.publishedAt);

    return sort === "desc"
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });

  return delay
    ? new Promise((resolve) => setTimeout(() => resolve(sortedData), delay))
    : sortedData;
}

export async function getPost(id: number): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.org/posts/${id}`);

  console.log(`https://jsonplaceholder.org/posts/${id}`);

  if (!response.ok) throw new Error("Data could not be obtained.");

  const data = await response.json();

  return data;
}
