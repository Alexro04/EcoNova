import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import useCabin from "./useCabin";

function CabinTable() {
  const { data: cabins, isPending } = useCabin();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount");
  let filteredCabins;

  if (isPending) return <Spinner />;

  if (filterValue === "all") filteredCabins = cabins?.data;
  if (filterValue === "no-discount")
    filteredCabins = cabins?.data.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins?.data.filter((cabin) => cabin.discount > 0);

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
          data={filteredCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin._id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
