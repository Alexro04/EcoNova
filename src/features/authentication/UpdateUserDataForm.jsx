import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useUpdateUserData from "./useUpdateUserData";
import toast from "react-hot-toast";

function UpdateUserDataForm({
  user: { id, fullname, email, phoneNumber: number },
}) {
  const { updateData, isPending } = useUpdateUserData();
  const [fullName, setFullName] = useState(fullname);
  const [phoneNumber, setPhoneNumber] = useState(number);
  const [avatar, setAvatar] = useState(null);

  function reset() {
    setFullName(fullname);
    setPhoneNumber(number);
    setAvatar(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (avatar || fullName !== fullname || phoneNumber !== number) {
      const update = { fullname: fullName, phoneNumber, avatar };
      updateData({ update, userId: id });
    } else toast.error("No change has been made yet");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Phone Number">
        <Input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          id="phone"
        />
      </FormRow>
      <FormRow label="Change avatar">
        <FileInput
          type="file"
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          onClick={reset}
          variation="secondary"
          size="medium">
          Cancel
        </Button>
        <Button variation="primary" size="medium" disabled={isPending}>
          Update account
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
