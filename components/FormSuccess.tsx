import { FaCheckCircle } from "react-icons/fa";

const FormSuccess = ({ message }: { message: string | undefined }) => {
    return (
        message && (
            <div className="bg-green-900/40 w-full p-3 rounded-lg">
                <FaCheckCircle className="inline-block mb-1 mr-2" />
                {message}
            </div>
        )
    );
};

export default FormSuccess;
