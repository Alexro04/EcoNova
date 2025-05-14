import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
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
      <Sort defaultBy="capacity" defaultOrder="asc">
        <Sort.SortBy
          options={[
            { value: "discount", label: "Sort by Discount" },
            { value: "capacity", label: "Sort by Capacity" },
            { value: "price", label: "Sort by Price" },
          ]}
        />
        <Sort.SortOrder
          options={[
            { value: "asc", label: "ASC" },
            { value: "desc", label: "DESC" },
          ]}
        />
      </Sort>
    </TableOperations>
  );
}

export default CabinTableOperations;
