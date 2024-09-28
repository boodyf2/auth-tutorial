import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./BackButton";
import Header from "./Header";
import Social from "./Social";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backLabel: string;
    backHref: string;
    showSocials?: boolean;
}

const CardWrapper = ({
    children,
    headerLabel,
    backLabel,
    backHref,
    showSocials = false,
}: CardWrapperProps) => {
    return (
        <Card className="bg-gray-900 flex flex-col gap-x-5 items-center w-[400px]">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent className="w-full">{children}</CardContent>
            {showSocials && <Social />}
            <CardFooter>
                <BackButton label={backLabel} href={backHref} />
            </CardFooter>
        </Card>
    );
};

export default CardWrapper;
