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
            { value: "checkInDate", label: "Sort by date" },
            {
              value: "bookingCost",
              label: "Sort by amount",
            },
          ]}
        />
        <Sort.SortOrder
          options={[
            { value: "asc", label: "Ascending" },
            { value: "desc", label: "Descending" },
          ]}
        />
      </Sort>
    </TableOperations>
  );
}

export default BookingTableOperations;
