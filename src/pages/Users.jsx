import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import Table from "../ui/Table";

function Users() {
  return (
    <>
      <Heading>Create a new Admin User</Heading>
      <SignupForm />
      <Heading>Manage Employees</Heading>
      <Table columns="1fr 1fr 1fr 0.5fr 1fr 0.3fr">
        <Table.Header>
          <div>National ID</div>
          <div>Full Name</div>
          <div>Email Address</div>
          <div>Role</div>
          <div>Phone Number</div>
          <div></div>
        </Table.Header>
        <Table.Body />
      </Table>
    </>
  );
}

export default Users;
