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
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 38rem 42rem;
  gap: 24px;
  border-radius: 10px;
  background-color: var(--color-grey-0);
  box-shadow: 5px 0px 20px var(--color-grey-200);
  padding: 24px 24px;
`;

const Picture = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PictureContainer = styled.div`
  height: 80dvb;
`;

function Login() {
  return (
    <LoginLayout>
      <MainContainer>
        <FormContainer>
          <Logo />
          <StyledHeading as="h3">Log into your account</StyledHeading>
          <LoginForm />
        </FormContainer>
        <PictureContainer>
          <Picture src="cabin2.jpg" />
        </PictureContainer>
      </MainContainer>
    </LoginLayout>
  );
}

export default Login;
