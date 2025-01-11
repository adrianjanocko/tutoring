import toast from "react-hot-toast";
import { ResponseMessage } from "./types";

export function parseDate(dateString: string): Date {
  const [day, month, year, hour, minute, second] = dateString
    .split(/[\s/:]/)
    .map((val) => parseInt(val, 10));

  return new Date(year, month - 1, day, hour, minute, second);
}

export async function handleResponseMessage<T>(
  promise: Promise<ResponseMessage>,
  onSuccess?: () => void
): Promise<void> {
  const response = await promise;

  if (response.success) {
    toast.success(response.message);
    if (onSuccess) onSuccess();
  } else toast.error(response.message);
}
