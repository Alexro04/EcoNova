import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCabin } from "../../services/apiCabins";
import { formatCurrency } from "../../utils/helpers";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import styled from "styled-components";
import toast from "react-hot-toast";

const FormRowAction = styled.div`
  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function CreateCabinForm() {
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const queryClient = useQueryClient();
  const { errors } = formState;

  const { mutate, isPending: isUploading } = useMutation({
    mutationFn: (data) =>
      toast.promise(() => addCabin(data), {
        success: "Cabin uploaded successfully",
        loading: "Uploading cabin...",
        error: "Cabin could not be uploaded",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
  });

  function submitForm(data) {
    mutate(data);
  }

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isUploading}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.capacity?.message}>
        <Input
          type="number"
          id="capacity"
          disabled={isUploading}
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
          disabled={isUploading}
          id="price"
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
          defaultValue={0}
          disabled={isUploading}
          {...register("discount", {
            validate: (value) => Number(value) <= Number(getValues().price),
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isUploading}
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin images" error={errors?.cabinImages?.message}>
        <FileInput
          type="file"
          id="image"
          accept="image/*"
          disabled={isUploading}
          multiple
          {...register("cabinImages", { required: "This field is required" })}
        />
      </FormRow>

      <FormRowAction>
        {/* type is an HTML attribute! */}
        <Button
          type="reset"
          variation="secondary"
          size="medium"
          disabled={isUploading}>
          Cancel
        </Button>
        <Button variation="primary" size="medium" disabled={isUploading}>
          Create cabin
        </Button>
      </FormRowAction>
    </Form>
  );
}

export default CreateCabinForm;
