import Button from "@/components/button";
import { createClient } from "@/lib/supabase/server";
import Logout from "./logout";

export default async function User() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return user ? (
    <Logout />
  ) : (
    <Button size="sm" href="/login">
      Login
    </Button>
  );
}
