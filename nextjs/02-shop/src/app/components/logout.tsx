"use client";

import useActionHandler from "@/hooks/useActionHandler";
import { logoutUser } from "@/lib/supabase/actions";
import SubmitButton from "../../components/submit-button";

export default function Logout() {
  const { isPending, processAction } = useActionHandler();

  function handleLogout() {
    processAction(logoutUser(), "/");
  }

  return (
    <SubmitButton size="sm" isPending={isPending} onClick={handleLogout}>
      Logout
    </SubmitButton>
  );
}
