import { useSearchParams } from "react-router-dom";

import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import useCabin from "./useCabin";

function CabinTable() {
  const { cabins, isPending } = useCabin();
  const [searchParams] = useSearchParams();

  if (isPending) return <Spinner />;

  //filter
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  //Sort
  const sortBy = searchParams.get("sortBy") || "capacity";
  const sortOrder = searchParams.get("sortOrder") || "asc";
  const mult = sortOrder === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[sortBy] - b[sortBy]) * mult
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Name</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin._id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
