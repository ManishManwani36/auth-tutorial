import { CardWrapper } from './CardWrapper';

export function LoginForm() {
    return (
        <CardWrapper
            headerLabel="Welcome Back!"
            backButtonLabel="Don't have an Account?"
            backButtonHref="/auth/register"
            showSocial
        >
            My Daily commit LoginForm
        </CardWrapper>
    );
}
