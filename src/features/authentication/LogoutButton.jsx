import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/login");
  }

  return (
    <ButtonIcon onClick={handleClick}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default LogoutButton;
