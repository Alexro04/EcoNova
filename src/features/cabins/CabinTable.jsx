import { useState } from "react";
import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import CreateCabinForm from "./CreateCabinForm";
import useCabin from "./useCabin";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  const [selectedCabin, setSelectedCabin] = useState(null);

  const { data: cabins, isPending } = useCabin();

  if (isPending) return <Spinner />;
  return (
    <Table role="table">
      <TableHeader>
        <div></div>
        <div>Name</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.data.map((cabin) => (
        <>
          <CabinRow
            cabin={cabin}
            key={cabin._id}
            selectedCabin={selectedCabin}
            setSelectedCabin={setSelectedCabin}
          />
          {selectedCabin === cabin._id && (
            <CreateCabinForm
              cabin={cabin}
              setSelectedCabin={setSelectedCabin}
            />
          )}
        </>
      ))}
    </Table>
  );
}

export default CabinTable;
