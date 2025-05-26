import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UserDetails from "../features/users/UserDetails";
import Heading from "../ui/Heading";

function Account() {
  return (
    <>
      <Heading>User Account</Heading>
      <UserDetails />
      <Heading as="h3">Change Password</Heading>
      <UpdatePasswordForm />
    </>
  );
}

export default Account;
