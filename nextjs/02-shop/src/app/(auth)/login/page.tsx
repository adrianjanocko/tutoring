"use client";

import AuthLayout from "@/app/(auth)/components/auth-layout";
import Button from "@/components/button";
import ErrorMessage from "@/components/error-message";
import Input from "@/components/input";
import { loginSchema } from "@/utils/schemas";
import { LoginData } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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

  function onSubmit(data: LoginData) {
    // TODO
  }

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
          <Link href="/">Forgot Password?</Link>
        </div>

        <Button type="submit">Login</Button>
      </form>
    </AuthLayout>
  );
}
