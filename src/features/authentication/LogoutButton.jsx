import { HiArrowRightOnRectangle } from "react-icons/hi2";

import ButtonIcon from "../../ui/ButtonIcon";
import { useAuth } from "../../context/useAuth";
import Modal from "../../ui/Modal";
import ConfirmAction from "../../ui/ConfirmAction";
import Heading from "../../ui/Heading";

function LogoutButton() {
  const { logout } = useAuth();

  return (
    <Modal>
      <Modal.Open opens="log-out-confirmation">
        <ButtonIcon>
          <HiArrowRightOnRectangle />
        </ButtonIcon>
      </Modal.Open>

      <Modal.Window name="log-out-confirmation">
        <ConfirmAction onConfirm={logout} action="Log out">
          <Heading as="h3">Log out</Heading>
          <p>Are you sure you want to log out?</p>
        </ConfirmAction>
      </Modal.Window>
    </Modal>
  );
}

export default LogoutButton;
