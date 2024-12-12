import { Post } from "./types";

export async function getPosts(delay?: number, limit = 10): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.org/posts");

  if (!response.ok) throw new Error("Data could not be obtained.");

  const data = await response.json();

  if (delay)
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), delay);
    });

  return data.slice(0, limit);
}
