import styled from "styled-components";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Menus from "../../ui/Menus";
import { FaUserCog } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

function UserRow({ user }) {
  const {
    _id: userId,
    fullname,
    status,
    email,
    phoneNumber,
    nationalId,
    nationality,
  } = user;

  const statusToTagName = {
    "awaiting verification": "yellow",
    verified: "green",
  };

  return (
    <Table.Row>
      <div>{nationalId}</div>
      <div>{fullname}</div>
      <Stacked>
        <span>{email}</span>
        <span>{phoneNumber}</span>
      </Stacked>
      <Tag type={statusToTagName[status]}>{status}</Tag>
      <div>{nationality}</div>
      <Menus.Container>
        <Menus.Menu>
          <Menus.Toogle id={userId} />
          <Menus.List id={userId}>
            <Menus.Button label="Make super-admin" icon={<FaUserCog />} />
            <Menus.Button label="Delete account" icon={<HiTrash />} />
          </Menus.List>
        </Menus.Menu>
      </Menus.Container>
    </Table.Row>
  );
}

export default UserRow;
