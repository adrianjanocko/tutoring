"use client";

import useActionHandler from "@/hooks/useActionHandler";
import { registerSchema } from "@/utils/schemas";
import { registerUser } from "@/utils/supabase/actions";
import { RegisterData } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../../components/error-message";
import SubmitButton from "../../../components/submit-button";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });
  const { processAction, isPending } = useActionHandler();

  async function onSubmit(data: RegisterData) {
    processAction(registerUser(data), "/");
  }

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96 p-8">
        <h2 className="text-xl font-bold mb-6 text-center">
          Create an account
        </h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="input input-bordered w-full"
            placeholder="Enter your email"
            disabled={isPending}
          />
          <ErrorMessage error={errors.email} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="input input-bordered w-full"
            placeholder="Enter your password"
            disabled={isPending}
          />
          <ErrorMessage error={errors.password} />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-2">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className="input input-bordered w-full"
            placeholder="Confirm your password"
            disabled={isPending}
          />
          <ErrorMessage error={errors.confirmPassword} />
        </div>
        <SubmitButton isPending={isPending} text="Register" />
      </form>
    </div>
  );
}
