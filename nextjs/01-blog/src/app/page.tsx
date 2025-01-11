import Heading from "@/components/heading";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="grid gap-4">
      <Heading>Home</Heading>

      {user ? <p>Welcome, {user.email}!</p> : <p>Not logged</p>}
    </div>
  );
}
