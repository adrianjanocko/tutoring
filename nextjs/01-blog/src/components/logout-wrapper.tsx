import { createClient } from "@/utils/supabase/server";
import Logout from "./logout";

export default async function LogoutWrapper() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user && <Logout />;
}
