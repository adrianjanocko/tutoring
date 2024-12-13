import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { Metadata } from "next";
import { Suspense } from "react";
import BlogLoading from "./components/BlogLoading";
import BlogPosts from "./components/BlogPosts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <Container>
      <Heading>See our blog posts!</Heading>

      <Suspense fallback={<BlogLoading />}>
        <BlogPosts />
      </Suspense>
    </Container>
  );
}
