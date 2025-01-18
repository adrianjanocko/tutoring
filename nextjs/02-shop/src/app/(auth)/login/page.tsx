"use client";

import Button from "@/components/button";
import ErrorMessage from "@/components/error-message";
import Input from "@/components/input";
import AuthLayout from "@/components/layout/auth-layout";
import { loginSchema } from "@/utils/schemas";
import { loginUser } from "@/utils/supabase/actions";
import { LoginData } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: LoginData) => {
    const result = await loginUser(data);
    if (!result.success) {
      console.log(result.message);
    } else {
      console.log("User logged:", result);
    }
  };

  return (
    <AuthLayout
      heading="Welcome 👋"
      subheading="Please login here"
      imageUrl="/images/auth/login.png"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <Input
          label="Email Address"
          type="text"
          {...register("email")}
          placeholder="Username"
        />
        <ErrorMessage error={errors.email} />

        <Input
          label="Password"
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <ErrorMessage error={errors.password} />

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Input type="checkbox" {...register("rememberMe")} />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <div>
            <a href="#" className="mt-5">
              Forgot Password?
            </a>
          </div>
        </div>

        <Button type="submit">Login</Button>
      </form>
    </AuthLayout>
  );
}
