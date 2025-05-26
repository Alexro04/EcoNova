import styled from "styled-components";

import UpdateUserDataForm from "../authentication/UpdateUserDataForm";
import Heading from "../../ui/Heading";
import { useAuth } from "../../context/useAuth";

const Avatar = styled.img`
  width: 22rem;
  height: 22rem;
  object-fit: cover;
  border-radius: 8px;
`;

const StyledUserDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.2rem;
`;

function UserDetails() {
  const {
    user_data: { id, fullname, email, avatar, phoneNumber },
  } = useAuth();

  return (
    <>
      <Heading as="h3">Update User Data</Heading>
      <StyledUserDetails>
        <Avatar src={avatar ? avatar : "default-user.jpg"} />
        <UpdateUserDataForm user={{ id, fullname, email, phoneNumber }} />
      </StyledUserDetails>
    </>
  );
}

export default UserDetails;
