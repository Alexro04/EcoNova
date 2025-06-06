import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useCreateAdmin from "../users/useCreateAdmin";

function SignupForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { createAdmin, isPending } = useCreateAdmin();

  function registerUser(data) {
    createAdmin(data, { onSettled: reset });
  }

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
          {...register("email", {
            required: "This Field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email format",
            },
          })}
        />
      </FormRow>

      <FormRow label="National ID" error={errors?.email?.message}>
        <Input
          type="text"
          id="nationalId"
          {...register("nationalId", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Nationality" error={errors?.email?.message}>
        <Input
          type="text"
          id="nationality"
          {...register("nationality", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Phone Number" error={errors?.email?.message}>
        <Input
          type="text"
          id="phoneNumber"
          {...register("phoneNumber", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" size="large" type="reset" onClick={reset}>
          Cancel
        </Button>
        <Button size="large" variation="primary" disabled={isPending}>
          Create new user
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
