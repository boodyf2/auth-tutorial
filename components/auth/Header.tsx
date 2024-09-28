import { FcLock } from "react-icons/fc";

interface HeaderProps {
    label: string;
}

const Header = ({ label }: HeaderProps) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-semibold text-4xl">
                <FcLock className="inline-block mr-2 mb-2" />
                Auth
            </h1>
            <p className="text-muted-foreground">{label}</p>
        </div>
    );
};

export default Header;
