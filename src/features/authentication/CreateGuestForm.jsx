import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import useCreateAdmin from "../users/useCreateAdmin";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import GuestDataFormRow from "../../ui/GuestDataFormRow";
import {
  HiOutlineFlag,
  HiOutlineIdentification,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi2";

const StyledForm = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
`;

const StyledInput = styled(Input)`
  padding: 10px 48px;
`;

function CreateGuestForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { createAdmin, isPending } = useCreateAdmin();

  function registerUser(data) {
    createAdmin(data, { onSettled: reset });
  }

  return (
    <StyledForm onSubmit={handleSubmit(registerUser)}>
      <GuestDataFormRow
        label="Full Name"
        // error={errors?.fullname?.message}
        error="This field is required"
        icon={<HiOutlineUser />}>
        <StyledInput
          type="text"
          id="fullname"
          {...register("fullname", { required: "This Field is required" })}
        />
      </GuestDataFormRow>

      <GuestDataFormRow
        label="Nationality"
        error={errors?.fullname?.message}
        icon={<HiOutlineFlag />}>
        <StyledInput
          type="text"
          id="nationality"
          {...register("nationality", { required: "This Field is required" })}
        />
      </GuestDataFormRow>

      <GuestDataFormRow
        label="Email Address"
        error={errors?.fullname?.message}
        icon={<HiOutlineMail />}>
        <StyledInput
          type="text"
          id="email"
          {...register("email", {
            required: "This Field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email format",
            },
          })}
        />
      </GuestDataFormRow>

      <GuestDataFormRow
        label="Phone Number"
        error={errors?.fullname?.message}
        icon={<HiOutlinePhone />}>
        <StyledInput
          type="text"
          id="phoneNumber"
          {...register("phoneNumber", { required: "This Field is required" })}
        />
      </GuestDataFormRow>

      <GuestDataFormRow
        label="National ID (NIN)"
        error={errors?.fullname?.message}
        icon={<HiOutlineIdentification />}>
        <StyledInput
          type="text"
          id="nationalId"
          {...register("nationalId", { required: "This Field is required" })}
        />
      </GuestDataFormRow>

      {/* 

      {/* <FormRow>
        <Button variation="secondary" size="large" type="reset" onClick={reset}>
          Cancel
        </Button>
        <Button size="large" variation="primary" disabled={isPending}>
          Create new user
        </Button>
      </FormRow> */}
    </StyledForm>
  );
}

export default CreateGuestForm;
