"use client";

import Button from "@/components/button";
import ErrorMessage from "@/components/error-message";
import Input from "@/components/input";
import { registerSchema } from "@/utils/schemas";
import { registerUser } from "@/utils/supabase/actions";
import { RegisterData } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import AuthLayout from "../../../components/layout/auth-layout";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: RegisterData) => {
    const result = await registerUser(data);

    if (!result.success) {
      console.log(result.message); // Zobraz chybovú správu
    } else {
      console.log("User registered:", result); // Zobraz úspešnú správu
    }
  };

  return (
    <AuthLayout
      heading="Create New Account"
      subheading="Please enter details"
      imageUrl="/images/auth/register.png"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <Input
          label="First Name"
          type="text"
          {...register("firstname")}
          placeholder="Robert"
        />
        <ErrorMessage error={errors.firstname} />

        <Input
          label="Last Name"
          type="text"
          {...register("lastname")}
          placeholder="Fox"
        />
        <ErrorMessage error={errors.lastname} />

        <Input
          label="Email Address"
          type="text"
          {...register("email")}
          placeholder="robertfox@example.com"
        />
        <ErrorMessage error={errors.email} />

        <Input
          label="Password"
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <ErrorMessage error={errors.password} />

        <div className="flex items-center gap-2 mb-4">
          <Input type="checkbox" {...register("terms")} />
          <label htmlFor="terms">
            I agree to the{" "}
            <Link href="/" className="font-bold">
              Terms & Conditions
            </Link>
          </label>
        </div>

        <Button type="submit">Signup</Button>
      </form>
    </AuthLayout>
  );
}
