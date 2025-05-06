import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HiOutlineDuplicate, HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi2";
import styled from "styled-components";

import CreateCabinForm from "./CreateCabinForm";
import { formatCurrency } from "../../utils/helpers";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import useCreateCabin from "./useCreateCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
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

function CabinRow({ cabin, selectedCabin, setSelectedCabin }) {
  const { name, price, _id, discount, cabinPictures, capacity } = cabin;
  const queryClient = useQueryClient();
  const { mutate: createCabin } = useCreateCabin();

  function handleToggleEditForm(id) {
    if (selectedCabin === id) setSelectedCabin(null);
    else setSelectedCabin(id);
  }

  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: (id) =>
      toast.promise(deleteCabin(id), {
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
    <>
      <TableRow>
        <Img src={cabinPictures[0].url} />
        <Cabin>{name}</Cabin>
        <div>fits up to {capacity} people</div>
        <Price>{formatCurrency(price)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div>
          <button onClick={handleDuplicateCabin}>
            <HiOutlineDuplicate />
          </button>
          <button onClick={() => handleToggleEditForm(_id)}>
            <HiOutlinePencil />
          </button>
          <button onClick={() => mutate(_id)} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : <HiOutlineTrash />}
          </button>
        </div>
      </TableRow>
      {selectedCabin === cabin._id && (
        <CreateCabinForm cabin={cabin} setSelectedCabin={setSelectedCabin} />
      )}
    </>
  );
}

export default CabinRow;
