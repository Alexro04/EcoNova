import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import useUserData from "./useUserData";
import { useAuth } from "../../context/useAuth";

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
  const { user_data, updateUser, setSession } = useAuth();
  const navigate = useNavigate();

  // redirect user if user data cannot be fetched
  useEffect(
    function () {
      if (!isPending && (!userData || Object.keys(userData).length === 0)) {
        setSession({});
        navigate("/login");
      }
    },
    [isPending, navigate, userData, setSession]
  );

  // update the user_data in the Auth Context
  useEffect(
    function () {
      if (userData && Object.keys(userData).length > 0) updateUser(userData);
    },
    [userData, updateUser]
  );

  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // if user is authorized, render the app
  if (!isPending && Object.keys(user_data).length > 0) return children;
}
export default ProtectedWrapper;
