import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useUpdatePassword from "./useUpdatePassword";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();

  const { updatePassword, isPending: isUpdating } = useUpdatePassword();
  const { errors } = formState;

  // const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ oldPassword, password }) {
    console.log({ oldPassword, password });
    updatePassword({ oldPassword, password }, { onSettled: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Old password" error={errors?.oldPassword?.message}>
        <Input
          type="password"
          id="oldPassword"
          disabled={isUpdating}
          {...register("oldPassword", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="New password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords must match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          size="medium"
          onClick={reset}>
          Cancel
        </Button>
        <Button variation="primary" size="medium">
          Change password
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
