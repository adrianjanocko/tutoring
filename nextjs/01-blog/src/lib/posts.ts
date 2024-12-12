import { Post } from "./types";

interface PostsProps {
  delay?: number;
  limit?: number;
}

export async function getPosts({ delay, limit = 10 }: PostsProps = {}): Promise<
  Post[]
> {
  const response = await fetch("https://jsonplaceholder.org/posts");

  if (!response.ok) throw new Error("Data could not be obtained.");

  const data = await response.json();

  if (delay)
    return new Promise((resolve) => {
      setTimeout(() => resolve(data.slice(0, limit)), delay);
    });

  return data.slice(0, limit);
}
