import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import useAdminUsers from "./useAdminUsers";
import UserRow from "./UserRow";

function UsersTable() {
  const { admins, isPending } = useAdminUsers();

  if (isPending) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.8fr 1.1fr 1.5fr 1.2fr 0.6fr 0.5fr">
        <Table.Header>
          <div>National ID</div>
          <div>Full Name</div>
          <div>Contacts</div>
          <div>Status</div>
          <div>Nationality</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={admins}
          render={(admin) => <UserRow user={admin} key={admin._id} />}
        />
      </Table>
    </Menus>
  );
}

export default UsersTable;
