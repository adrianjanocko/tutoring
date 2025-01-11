import { ResponseMessage } from "@/utils/types";
import { handleResponseMessage } from "@/utils/utils";
import { redirect } from "next/navigation";
import { useTransition } from "react";

export default function useActionHandler() {
  const [isPending, startTransition] = useTransition();

  async function processAction(
    promise: Promise<ResponseMessage>,
    onSuccess?: (() => void) | string
  ) {
    startTransition(async () => {
      await handleResponseMessage(promise, () => {
        if (typeof onSuccess === "string") {
          redirect(onSuccess);
        } else if (typeof onSuccess === "function") {
          onSuccess();
        }
      });
    });
  }

  return { isPending, processAction };
}
