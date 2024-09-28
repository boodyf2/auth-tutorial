"use server";
import z from "zod";
import { LoginFormSchema } from "@/schemas";

const login = async (values: z.infer<typeof LoginFormSchema>) => {
    const result = LoginFormSchema.safeParse(values);

    if (!result.success) {
        return { error: "Invalid fields!" };
    }

    return { success: "Email sent!" };
};

export default login;
