import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

function Social() {
    return (
        <div className="w-full flex items-center gap-x-2 p-6 pt-0">
            <Button variant="outline" className="w-full">
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="w-full">
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    );
}

export default Social;
