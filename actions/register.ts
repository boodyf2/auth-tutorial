"use server";
import z from "zod";
import { RegisterFormSchema } from "@/schemas";

const register = async (values: z.infer<typeof RegisterFormSchema>) => {
    const result = RegisterFormSchema.safeParse(values);

    if (!result.success) {
        return { error: "Invalid fields!" };
    }

    return { success: "Register completed!" };
};

export default register;
