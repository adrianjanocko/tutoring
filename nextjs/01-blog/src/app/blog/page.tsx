import Container from "@/components/container";
import Heading from "@/components/heading";
import { Metadata } from "next";
import { Suspense } from "react";
import BlogPosts from "./components/blog-posts";
import BlogLoading from "./components/blog-posts-loading";

export const metadata: Metadata = {
  title: "Blog",
};

interface BlogPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const sort = (await searchParams)?.sort ?? "desc";

  return (
    <Container>
      <Heading>See our blog posts!</Heading>

      <Suspense fallback={<BlogLoading />}>
        <BlogPosts sort={sort} />
      </Suspense>
    </Container>
  );
}
