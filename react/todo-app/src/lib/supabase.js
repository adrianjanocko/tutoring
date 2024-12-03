import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Register a new user
async function registerUser(email, password) {
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    return { user, error };
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

// Login a user
async function loginUser(email, password) {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { user, error };
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

// Logout the current user
function logout() {
  supabase.auth.signOut();
}

export { loginUser, logout, registerUser, supabase };
