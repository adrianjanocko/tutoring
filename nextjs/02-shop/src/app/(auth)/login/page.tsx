"use client";

import AuthLayout from "@/app/(auth)/components/auth-layout";
import Button from "@/components/button";
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
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="email"
        label="Email Address"
        type="text"
        {...register("email")}
        placeholder="Username"
        error={errors.email}
      />

      <Input
        id="password"
        label="Password"
        type="password"
        {...register("password")}
        placeholder="Password"
        error={errors.password}
      />

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <Input id="remember-me" type="checkbox" {...register("rememberMe")} />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <Link href="/">Forgot Password?</Link>
      </div>

      <Button type="submit">Login</Button>
    </AuthLayout>
  );
}
