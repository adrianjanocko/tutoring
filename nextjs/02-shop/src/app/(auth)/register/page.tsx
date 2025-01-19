"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { registerSchema } from "@/utils/schemas";
import { RegisterData } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/auth-layout";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  function onSubmit(data: RegisterData) {
    // TODO
  }

  return (
    <AuthLayout
      heading="Create New Account"
      subheading="Please enter details"
      imageUrl="/images/auth/register.png"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="first-name"
        label="First Name"
        type="text"
        {...register("firstName")}
        placeholder="Robert"
        error={errors.firstName}
      />

      <Input
        id="last-name"
        label="Last Name"
        type="text"
        {...register("lastName")}
        placeholder="Fox"
        error={errors.lastName}
      />

      <Input
        id="e-mail"
        label="Email Address"
        type="text"
        {...register("email")}
        placeholder="robertfox@example.com"
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

      <div className="flex items-center gap-3 mb-4">
        <Input id="terms" type="checkbox" {...register("acceptTerms")} />
        <label htmlFor="terms">
          I agree to the{" "}
          <Link href="/" className="font-bold">
            Terms & Conditions
          </Link>
        </label>
      </div>

      <Button type="submit">Signup</Button>
    </AuthLayout>
  );
}
