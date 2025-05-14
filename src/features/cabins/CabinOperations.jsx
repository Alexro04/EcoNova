import Filter from "../../ui/Filter";
import Sort from "./Sort";
import TableOperations from "../../ui/TableOperations";

function CabinOperations() {
  return (
    <TableOperations>
      <Filter
        fieldname="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <Sort />
    </TableOperations>
  );
}

export default CabinOperations;
