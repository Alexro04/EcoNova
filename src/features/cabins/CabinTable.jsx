import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import useCabin from "./useCabin";

function CabinTable() {
  const { data: cabins, isPending } = useCabin();

  if (isPending) return <Spinner />;
  return (
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
        data={cabins.data}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin._id} />}
      />
    </Table>
  );
}

export default CabinTable;
