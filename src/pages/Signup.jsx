import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const SignupLayout = styled.main`
  min-height: 100dvh;
  display: grid;
  align-content: center;
  justify-content: center;
  /* gap: 2rem; */
  background-color: var(--color-grey-50);
`;

const FormContainer = styled.div`
  display: grid;
  gap: 2.2rem;
  border-radius: 10px;
  background-color: var(--color-grey-0);
  box-shadow: 5px 0px 20px var(--color-grey-200);
  padding: 24px;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

function Signup() {
  return (
    <SignupLayout>
      <FormContainer>
        <Logo />
        <StyledHeading as="h3">Create an admin account</StyledHeading>
        <SignupForm />
      </FormContainer>
    </SignupLayout>
  );
}

export default Signup;
