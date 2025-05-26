import SignupForm from "../features/authentication/SignupForm";
import UsersTable from "../features/users/UsersTable";
import Heading from "../ui/Heading";

function Users() {
  return (
    <>
      <Heading>Create a new Admin User</Heading>
      <SignupForm />
      <Heading>Manage Employees</Heading>
      <UsersTable />
    </>
  );
}

export default Users;
