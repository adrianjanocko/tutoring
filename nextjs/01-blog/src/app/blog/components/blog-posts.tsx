import { getPosts } from "@/lib/actions";
import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface BlogPostsProps {
  sort: string;
}

export default async function BlogPosts({ sort }: BlogPostsProps) {
  const posts: Post[] = await getPosts({ limit: 4, sort });

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <Link
          href={{ pathname: "/blog", query: { sort: "desc" } }}
          className={`btn ${sort === "desc" ? "btn-primary" : "btn-outline"}`}
        >
          Sort Descending
        </Link>
        <Link
          href={{ pathname: "/blog", query: { sort: "asc" } }}
          className={`btn ${sort === "asc" ? "btn-primary" : "btn-outline"}`}
        >
          Sort Ascending
        </Link>
      </div>

      <ul className="grid grid-cols-2 gap-6">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
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
                  <span>{post.created_at}</span>
                </div>
                <h2 className="card-title">{post.title}</h2>
                <p className="truncate max-w-xl">{post.content}</p>
                <div className="card-actions">
                  <Link href={`/blog/${post.id}`}>
                    <button className="btn btn-primary">Read</button>
                  </Link>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li>No posts.</li>
        )}
      </ul>
    </div>
  );
}
