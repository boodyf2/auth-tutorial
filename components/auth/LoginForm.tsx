"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { LoginFormSchema } from "@/schemas";
import { Input } from "../ui/input";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { useState, useTransition } from "react";
import login from "@/actions/login";

type LoginFormType = z.infer<typeof LoginFormSchema>;

const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<LoginFormType>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: LoginFormType) => {
        setError("");
        setSuccess("");

        startTransition(async () => {
            const result = await login(values);
            setError(result?.error);
            setSuccess(result?.success);
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    placeholder="example@domain.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isPending} type="submit" className="w-full">
                    Submit
                </Button>
                <FormError message={error} />
                <FormSuccess message={success} />
            </form>
        </Form>
    );
};

export default LoginForm;
