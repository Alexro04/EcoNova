import { useForm } from "react-hook-form";
import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";

const FormRowAction = styled.div`
  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function CreateCabinForm({ cabin, onCloseWindow }) {
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const { errors } = formState;
  const isEditSession = cabin !== undefined;
  const { mutate: createCabin, isPending: isCreating } = useCreateCabin();
  const { mutate: editCabin, isPending: isEditing } = useEditCabin(cabin?._id);
  const isLoading = isCreating || isEditing;

  function submitForm(data) {
    if (isEditSession) editCabin(data, { onSuccess: () => onCloseWindow() });
    else createCabin(data, { onSuccess: () => reset() });
  }

  return (
    <Form
      onSubmit={handleSubmit(submitForm)}
      type={onCloseWindow ? "modal" : "regular"}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          defaultValue={cabin?.name || ""}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.capacity?.message}>
        <Input
          type="number"
          id="capacity"
          disabled={isLoading}
          defaultValue={cabin?.capacity || ""}
          {...register("capacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "The capacity maximum capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.price?.message}>
        <Input
          type="number"
          disabled={isLoading}
          id="price"
          defaultValue={cabin?.price || ""}
          {...register("price", {
            required: "This field is required",
            min: {
              value: 1,
              message: `cabin price should be greater than ${formatCurrency(
                1
              )}`,
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={cabin?.discount || 0}
          disabled={isLoading}
          {...register("discount", {
            validate: (value) =>
              Number(value) <= Number(getValues().price) ||
              "The discount cannot be larger than the regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isLoading}
          defaultValue={cabin?.description || ""}
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin images" error={errors?.cabinImages?.message}>
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          disabled={isLoading}
          multiple
          {...register("cabinImages", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>
      {isEditSession && (
        <p>
          *Note that uploading new files will completely overwrite the current
          ones
        </p>
      )}

      <FormRowAction>
        {/* type is an HTML attribute! */}
        <Button
          type="reset"
          variation="secondary"
          size="medium"
          disabled={isLoading}>
          Cancel
        </Button>
        <Button variation="primary" size="medium" disabled={isLoading}>
          {isEditSession ? "Edit cabin" : "Create cabin"}
        </Button>
      </FormRowAction>
    </Form>
  );
}

export default CreateCabinForm;
