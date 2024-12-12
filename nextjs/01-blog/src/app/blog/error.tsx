"use client";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <Container>
      <Heading>Something unexpected happened!</Heading>
      <p>{error.message}</p>
      <button
        className="btn btn-sm btn-info"
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        Retry
      </button>
    </Container>
  );
}
