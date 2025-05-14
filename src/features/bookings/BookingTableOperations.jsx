import Filter from "../../ui/Filter";
import Sort from "../../ui/Sort";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        fieldname="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <Sort defaultBy="date" defaultOrder="asc">
        <Sort.SortBy
          options={[
            { value: "startDate", label: "Sort by date" },
            {
              value: "totalPrice",
              label: "Sort by amount",
            },
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

export default BookingTableOperations;
