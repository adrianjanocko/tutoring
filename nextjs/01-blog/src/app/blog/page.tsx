import Container from "@/components/container";
import Heading from "@/components/heading";
import { getPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <Container>
      <Heading>See our blog posts!</Heading>

      <ul>
        {posts && posts.length > 0 ? (
          posts.map((post) => {
            return (
              <li key={post.id} className="list-disc">
                {post.title}
              </li>
            );
          })
        ) : (
          <li>No posts.</li>
        )}
      </ul>
    </Container>
  );
}
