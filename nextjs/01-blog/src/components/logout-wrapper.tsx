"use client";

import useActionHandler from "@/hooks/useActionHandler";
import { logoutUser } from "@/utils/supabase/actions";
import SubmitButton from "./submit-button";

export default function LogoutWrapper() {
  const { processAction, isPending } = useActionHandler();

  async function handleLogout() {
    processAction(logoutUser(), "/");
  }

  return (
    <SubmitButton isPending={isPending} text="Logout" onClick={handleLogout} />
  );
}
