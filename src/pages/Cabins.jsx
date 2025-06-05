import Line from "../ui/Line";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import styled from "styled-components";
import Modal from "../ui/Modal";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

function Cabins() {
  return (
    <>
      <Line type="horizontal">
        <Heading as="h1">Cabins</Heading>
        <CabinTableOperations />
      </Line>

      <Line type="vertical">
        <CabinTable />
        <ButtonContainer>
          <Modal>
            <Modal.Open opens="add-cabin">
              <Button variation="primary" size="large">
                Add Cabin
              </Button>
            </Modal.Open>
            <Modal.Window name="add-cabin">
              <CreateCabinForm />
            </Modal.Window>
          </Modal>
        </ButtonContainer>
      </Line>
    </>
  );
}

export default Cabins;
