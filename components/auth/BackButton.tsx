import Link from "next/link";

interface BackButtonProps {
    label: string;
    href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
    return (
        <Link
            className="text-blue-500 hover:text-blue-400 transition"
            href={href}
        >
            {label}
        </Link>
    );
};

export default BackButton;
