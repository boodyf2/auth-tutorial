import CardWrapper from "@/components/auth/CardWrapper";
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
    return (
        <CardWrapper
            headerLabel="Create an account"
            backLabel="Already have an account?"
            backHref="/auth/login"
            showSocials
        >
            <RegisterForm />
        </CardWrapper>
    );
};

export default RegisterPage;
