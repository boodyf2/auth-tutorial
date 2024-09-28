"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LoginButtonProps {
    children: ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

const LoginButton = ({
    children,
    mode = "redirect",
    asChild = false,
}: LoginButtonProps) => {
    const router = useRouter();

    if (mode === "modal") {
        return <span>TODO: Implement the modal case</span>;
    }

    const onClick = () => {
        router.push("/auth/login");
    };

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};

export default LoginButton;
