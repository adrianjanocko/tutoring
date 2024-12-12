import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { Suspense } from "react";
import BlogLoading from "./components/BlogLoading";
import BlogPosts from "./components/BlogPosts";

export default async function BlogPage() {
  return (
    <Container>
      <Heading>See our blog posts!</Heading>

      <Suspense fallback={<BlogLoading />}>
        <BlogPosts />
      </Suspense>
    </Container>
  );
}
