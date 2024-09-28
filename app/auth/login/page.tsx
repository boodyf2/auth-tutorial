import CardWrapper from "@/components/auth/CardWrapper";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
    return (
        <CardWrapper
            headerLabel="Welcome Back!"
            backLabel="Don't have an account?"
            backHref="/auth/register"
            showSocials
        >
            <LoginForm />
        </CardWrapper>
    );
};

export default LoginPage;
