// !! JUST FOR THE PURPOSE OF UNDERSTANDING HOW IT WORKS, DON'T USE IN PRODUCTION !!
// I DON'T RECOMMEND THIS PRACTICE AND IT'S NOT CORRECT - .ENV VARIABLES ARE EXPOSED TO THE CLIENT. INSTEAD I RECOMMEND TO USE E.G. VITE-EXPRESS (BACK-END).
import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

async function registerUser(email, password) {
  try {
    const user = await pb.collection("users").create({
      email,
      password,
      passwordConfirm: password,
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
