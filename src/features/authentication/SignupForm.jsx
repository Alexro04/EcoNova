import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import styled from "styled-components";

// Email regex: /\S+@\S+\.\S+/

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: var(--color-brand-500);
  padding-left: 8px;
  font-weight: 500;
`;

const StyledFormRow = styled(FormRow)`
  display: grid;
  grid-template-columns: 24rem 1fr;
`;

function SignupForm() {
  return (
    <Form>
      <StyledFormRow label="Full name" error={""}>
        <Input type="text" id="fullName" />
      </StyledFormRow>

      <StyledFormRow label="Email address" error={""}>
        <Input type="email" id="email" />
      </StyledFormRow>

      <StyledFormRow label="Password (min 8 characters)" error={""}>
        <Input type="password" id="password" />
      </StyledFormRow>

      <StyledFormRow label="Repeat password" error={""}>
        <Input type="password" id="passwordConfirm" />
      </StyledFormRow>

      <ActionButtons>
        <div>
          <span>Already have an account</span>
          <StyledLink to="/login">Log in</StyledLink>
        </div>
        {/* type is an HTML attribute! */}
        <StyledFormRow>
          <Button variation="secondary" size="large" type="reset">
            Cancel
          </Button>
          <Button size="large" variation="primary">
            Create new user
          </Button>
        </StyledFormRow>
      </ActionButtons>
    </Form>
  );
}

export default SignupForm;
