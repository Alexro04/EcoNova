import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CabinOperations() {
  return (
    <TableOperations>
      <Filter
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinOperations;
