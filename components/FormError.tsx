import { FaExclamationTriangle } from "react-icons/fa";

const FormError = ({ message }: { message: string | undefined }) => {
    return (
        message && (
            <div className="bg-red-900/40 w-full p-3 rounded-lg">
                <FaExclamationTriangle className="inline-block mb-1 mr-2" />
                {message}
            </div>
        )
    );
};

export default FormError;
