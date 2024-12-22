import Heading from "@/components/heading";
import { getPost } from "@/utils/actions";
import { Post } from "@/utils/types";
import Image from "next/image";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   const posts: Post[] = await getPosts();

//   return posts.map((post) => ({
//     id: String(post.id),
//   }));
// }

export default async function SeparateBlogPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  let post: Post;

  try {
    post = await getPost(id);
  } catch {
    notFound();
  }

  return (
    <div className="grid gap-4">
      <div className="relative w-full h-80">
        <Image
          fill
          src={post.image}
          alt={post.title}
          className="object-cover"
        />
      </div>
      <Heading className="text-left">{post.title}</Heading>
      <p className="text-sm text-gray-500">
        Published on {post.created_at} | Category: {post.category}
      </p>
      <p>{post.content}</p>
    </div>
  );
}
