"use client";

import AuthLayout from "@/app/(auth)/components/auth-layout";
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import useActionHandler from "@/hooks/useActionHandler";
import { loginUser } from "@/lib/supabase/actions";
import { loginSchema } from "@/utils/schemas";
import { LoginData } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

const inputConfig: Array<{
  id: keyof LoginData;
  label: string;
  type: string;
  placeholder: string;
}> = [
  {
    id: "email",
    label: "Email Address",
    type: "text",
    placeholder: "Username",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
  },
];

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const { isPending, processAction } = useActionHandler();

  function onSubmit(data: LoginData) {
    processAction(loginUser(data), "/");
  }

  return (
    <AuthLayout
      heading="Welcome 👋"
      subheading="Please login here"
      imageUrl="/images/auth/login.png"
      onSubmit={handleSubmit(onSubmit)}
    >
      {inputConfig.map(({ id, label, type, placeholder }) => (
        <Input
          key={id}
          id={id}
          label={label}
          type={type}
          placeholder={placeholder}
          {...register(id)}
          error={errors[id]}
          disabled={isPending}
        />
      ))}

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <Input
            id="remember-me"
            type="checkbox"
            {...register("rememberMe")}
            disabled={isPending}
          />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <Link href="/">Forgot Password?</Link>
      </div>

      <SubmitButton isPending={isPending}>Login</SubmitButton>
    </AuthLayout>
  );
}
