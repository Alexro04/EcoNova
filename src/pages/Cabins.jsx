import React, { useState } from "react";
import Line from "../ui/Line";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Line type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <p>Filter / Sort</p>
      </Line>
      <Line type="vertical">
        <CabinTable />
        <ButtonContainer>
          <Button
            variation={showForm ? "secondary" : "primary"}
            size="large"
            onClick={() => setShowForm((curr) => !curr)}>
            {showForm ? "Close Form" : "Add Cabin"}
          </Button>
        </ButtonContainer>
        {showForm && <CreateCabinForm />}
      </Line>
    </>
  );
}

export default Cabins;
