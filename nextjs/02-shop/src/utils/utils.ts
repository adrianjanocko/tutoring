import toast from "react-hot-toast";
import { ResponseMessage } from "./types";

export async function handleResponseMessage(
  promise: Promise<ResponseMessage>,
  onSuccess?: () => void
): Promise<void> {
  const response = await promise;

  if (response.success) {
    toast.success(response.message);
    if (onSuccess) onSuccess();
  } else toast.error(response.message);
}
