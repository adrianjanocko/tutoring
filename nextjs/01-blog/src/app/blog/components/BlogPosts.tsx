import { getPosts } from "@/lib/posts";
import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPosts() {
  const posts: Post[] = await getPosts({ delay: 5000 });

  return (
    <ul className="grid grid-cols-2 gap-6">
      {posts && posts.length > 0 ? (
        posts.map((post) => {
          return (
            <li className="text-left card bg-base-200 w-96" key={post.id}>
              <figure className="relative w-full h-32">
                <Image
                  fill
                  src={post.image}
                  alt={`${post.slug} Thumbnail`}
                  className="object-cover"
                  quality={50}
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center justify-between text-gray-600">
                  <span>#{post.category}</span>
                  <span>{String(post.publishedAt)}</span>
                </div>
                <h2 className="card-title">{post.title}</h2>
                <p className="truncate max-w-xl">{post.content}</p>
                <div className="card-actions">
                  <Link href={`/blog/${post.slug}`}>
                    <button className="btn btn-primary">Read</button>
                  </Link>
                </div>
              </div>
            </li>
          );
        })
      ) : (
        <li>No posts.</li>
      )}
    </ul>
  );
}
