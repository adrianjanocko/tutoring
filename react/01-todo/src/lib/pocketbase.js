// NOTE: If you want to implement logging in as an administrator within pocketbase and then retrieving things from collections and such, in this case I recommend using the back-end, here it wouldn't be safe because of the .env variables - they would be exposed to the client.

import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

async function registerUser(email, password, passwordConfirm) {
  try {
    const user = await pb.collection("users").create({
      email,
      password,
      passwordConfirm,
    });
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

async function loginUser(email, password) {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    return authData;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

function logout() {
  pb.authStore.clear();
}

export { loginUser, logout, pb, registerUser };
