import { createClient } from "@/utils/supabase/server";
import LogoutWrapper from "./logout-wrapper";

export default async function Logout() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return user && <LogoutWrapper />;
}
