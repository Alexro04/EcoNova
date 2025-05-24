import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import useUserData from "./useUserData";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useLogout from "./useLogout";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedWrapper({ children }) {
  // check for user data
  const { userData, isPending } = useUserData();
  const { updateUser } = useAuth();
  const navigate = useNavigate();
  const { logout } = useLogout();

  // redirect user if user data cannot be fetched
  useEffect(
    function () {
      if (!isPending && (!userData || Object.keys(userData) === 0)) logout();
    },
    [isPending, navigate, userData, logout]
  );

  // update the user_data in the Auth Context
  useEffect(
    function () {
      if (userData?.user_data) updateUser(userData?.user_data);
    },
    [userData?.user_data, updateUser]
  );

  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // if user is authorized, render the app
  return children;
}
export default ProtectedWrapper;
