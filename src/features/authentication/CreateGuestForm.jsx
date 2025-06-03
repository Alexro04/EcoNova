import { HiOutlineMail } from "react-icons/hi";
import {
  HiOutlineFlag,
  HiOutlineIdentification,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi2";

import Input from "../../ui/Input";
import styled from "styled-components";
import GuestDataFormRow from "../../ui/GuestDataFormRow";

const StyledForm = styled.div`
  padding: 12px 32px;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
`;

const StyledInput = styled(Input)`
  padding: 10px 48px;
`;

function CreateGuestForm({ errors, register }) {
  return (
    <StyledForm>
      <GuestDataFormRow
        label="Full Name"
        error={errors?.fullname?.message}
        icon={<HiOutlineUser />}>
        <StyledInput
          type="text"
          id="fullname"
          {...register("fullname", { required: "This Field is required" })}
        />
      </GuestDataFormRow>

      <GuestDataFormRow
        label="Country"
        error={errors?.nationality?.message}
        icon={<HiOutlineFlag />}>
        <StyledInput
          type="text"
          id="nationality"
          {...register("nationality", { required: "This Field is required" })}
        />
      </GuestDataFormRow>

      <GuestDataFormRow
        label="Email Address"
        error={errors?.email?.message}
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
        error={errors?.phoneNumber?.message}
        icon={<HiOutlinePhone />}>
        <StyledInput
          type="text"
          id="phoneNumber"
          {...register("phoneNumber", { required: "This Field is required" })}
        />
      </GuestDataFormRow>

      <GuestDataFormRow
        label="National ID (NIN)"
        error={errors?.nationalId?.message}
        icon={<HiOutlineIdentification />}>
        <StyledInput
          type="text"
          id="nationalId"
          {...register("nationalId", { required: "This Field is required" })}
        />
      </GuestDataFormRow>
    </StyledForm>
  );
}

export default CreateGuestForm;
