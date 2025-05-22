import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import styled from "styled-components";
import { useForm } from "react-hook-form";

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

function SignupForm() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  function registerUser(data) {
    console.log(data);
    console.log(errors);
  }

  const FormInput = styled.div``;

  return (
    <Form onSubmit={handleSubmit(registerUser)}>
      <FormRow label="Full name" error={errors?.fullname?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullname", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            validate: (password) =>
              password === getValues().password || "The paswords do not match",
          })}
        />
      </FormRow>

      <ActionButtons>
        <div>
          <span>Already have an account</span>
          <StyledLink to="/login">Log in</StyledLink>
        </div>
        {/* type is an HTML attribute! */}
        <FormRow>
          <Button variation="secondary" size="large" type="reset">
            Cancel
          </Button>
          <Button size="large" variation="primary">
            Create new user
          </Button>
        </FormRow>
      </ActionButtons>
    </Form>
  );
}

export default SignupForm;
