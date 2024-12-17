import Container from "@/components/container";
import Heading from "@/components/heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <Heading>This page couldn&apos;t be found!</Heading>
      <p className="text-gray-500">You&apos;re on the wrong track!</p>
      <Link href="/">
        <button className="btn btn-sm btn-info">Go back home</button>
      </Link>
    </Container>
  );
}
