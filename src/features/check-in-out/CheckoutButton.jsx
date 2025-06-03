import Button from "../../ui/Button";
import ConfirmAction from "../../ui/ConfirmAction";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import useCheckout from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingout } = useCheckout();
  return (
    <Modal>
      <Modal.Open opens="check-out-confirmation">
        <Button variation="primary" size="small">
          Check out
        </Button>
      </Modal.Open>

      <Modal.Window name="check-out-confirmation">
        <ConfirmAction
          onConfirm={() => checkout(bookingId)}
          disabled={isCheckingout}
          action="check out">
          <Heading as="h3">Confirm Check out</Heading>
          <p>
            Are you sure you want to check out this guest. This action cannot be
            undone
          </p>
        </ConfirmAction>
      </Modal.Window>
    </Modal>
  );
}

export default CheckoutButton;
