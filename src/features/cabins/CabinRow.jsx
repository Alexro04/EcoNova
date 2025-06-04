import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HiOutlineDuplicate, HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi2";
import styled from "styled-components";

import CreateCabinForm from "./CreateCabinForm";
import { formatCurrency } from "../../utils/helpers";
import toast from "react-hot-toast";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Carousel from "../../ui/Carousel";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const ImageContainer = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { name, price, _id, discount, cabinPictures, capacity } = cabin;
  const queryClient = useQueryClient();
  const { mutate: createCabin } = useCreateCabin();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) =>
      toast.promise(deleteCabinApi(id), {
        success: "Cabin deleted successfully",
        error: "An error occured. Try again!",
        loading: "Deleting cabin...",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
  });

  function handleDuplicateCabin() {
    const data = {
      ...cabin,
      name: `${cabin.name}-copy`,
      cabinPictures: JSON.stringify(cabin.cabinPictures),
    };
    console.log(data);
    createCabin(data);
  }

  return (
    <Table.Row>
      <Modal>
        <Modal.Open opens="picture">
          <ImageContainer>
            <Img src={cabinPictures[0].url} />
          </ImageContainer>
        </Modal.Open>
        <Modal.Window name="picture" type="carousel">
          <Carousel pictures={cabinPictures} />
        </Modal.Window>
      </Modal>
      <Cabin>{name}</Cabin>
      <div>fits up to {capacity} people</div>
      <Price>{formatCurrency(price)}</Price>
      <Discount>
        {discount > 0 ? formatCurrency(discount) : <span>&mdash;</span>}
      </Discount>
      <Menus.Container>
        <Modal>
          <Menus.Menu>
            <Menus.Toogle id={_id} />
            <Menus.List id={_id}>
              <Modal.Open opens={cabin._id}>
                <Menus.Button icon={<HiOutlinePencil />} label="Edit" />
              </Modal.Open>

              <Modal.Open opens="delete-cabin">
                <Menus.Button icon={<HiOutlineTrash />} label="Delete" />
              </Modal.Open>

              <Menus.Button
                onClick={handleDuplicateCabin}
                icon={<HiOutlineDuplicate />}
                label="Duplicate"
              />
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name={cabin._id}>
            <CreateCabinForm cabin={cabin} />
          </Modal.Window>

          <Modal.Window name="delete-cabin">
            <ConfirmDelete
              resourceName="Cabin"
              onConfirm={() => deleteCabin(_id)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
      </Menus.Container>
    </Table.Row>
  );
}

export default CabinRow;
