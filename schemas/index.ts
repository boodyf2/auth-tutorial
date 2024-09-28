import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const RegisterFormSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    }),
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password should be atleast 8 characters",
    }),
});
