import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100dvh;
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: var(--color-grey-50);
`;

const FormContainer = styled.div`
  display: grid;
  gap: 2rem;
  min-width: 42rem;
  border-radius: 10px;
  background-color: var(--color-grey-0);
  box-shadow: 5px 0px 20px var(--color-grey-200);
  padding: 24px 32px;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

function Login() {
  return (
    <LoginLayout>
      <FormContainer>
        <Logo />
        <StyledHeading as="h3">Log into your account</StyledHeading>
        <LoginForm />
      </FormContainer>
    </LoginLayout>
  );
}

export default Login;
