import { createClient } from "@/utils/supabase/server";
import LogoutWrapper from "./LogoutWrapper";

const Logout = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return user && <LogoutWrapper />;
};

export default Logout;
