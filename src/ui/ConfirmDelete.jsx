import Heading from "./Heading";
import ConfirmAction from "./ConfirmAction";

function ConfirmDelete({ resourceName, onConfirm, disabled }) {
  return (
    <ConfirmAction onConfirm={onConfirm} disabled={disabled} action="Delete">
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this <strong>{resourceName}</strong>{" "}
        permanently? This action cannot be undone.
      </p>
    </ConfirmAction>
  );
}

export default ConfirmDelete;
