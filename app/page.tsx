import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcLock } from "react-icons/fc";

const HomePage = async () => {
    return (
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col align-center gap-4">
            <h1 className="text-center text-4xl font-semibold">
                <FcLock className="inline-block mr-2 mb-2" />
                Auth
            </h1>
            <p className="text-center">
                Your Perfect Solution for authenication
            </p>
            <Link href="/auth/login">
                <Button size="lg" className="w-full">
                    Sign in
                </Button>
            </Link>
        </div>
    );
};

export default HomePage;
