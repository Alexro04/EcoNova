import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import Button from "../ui/Button";
import CreateGuestForm from "../features/authentication/CreateGuestForm";
import SelectCabinForm from "../features/bookings/SelectCabinForm";
import useCreateGuest from "../features/bookings/useCreateGuest";
import useBookCabin from "../features/bookings/useBookCabin";

const StyledCreateBooking = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

const StageHeading = styled.p`
  text-align: center;
  font-size: 3rem;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const LevelTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  border-radius: 8px;
  ${(props) =>
    props.active === "on" &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}
  ${(props) =>
    props.active === "off" &&
    css`
      background-color: var(--color-grey-0);
      color: var(--color-grey-600);
    `}
`;

const TagContainers = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
`;

const stages = ["Get Guest's Details", "Select Cabin and Stay Duration"];

function CreateBooking() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { createGuest, isPending: isCreating } = useCreateGuest();
  const { createBooking, isPending: isBooking } = useBookCabin();
  const navigate = useNavigate();

  const [level, setLevel] = useState(0);
  const [guestData, setGuestData] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const isLoading = isCreating || isBooking;

  function nextLevel(data) {
    setGuestData(data);
    setLevel((curr) => curr + 1);
  }

  function bookCabin() {
    if (bookingData.length < 6) return;
    createGuest(guestData, {
      onSuccess: (data) => {
        createBooking(
          { ...bookingData, guestId: data.guestId },
          {
            onSuccess: () => {
              navigate(`/bookings`);
            },
          }
        );
      },
    });
  }

  const prevLevel = () => {
    setLevel((curr) => curr - 1);
  };

  return (
    <>
      <StyledCreateBooking>
        <TagContainers>
          {stages.map((_, index) => (
            <LevelTag
              key={index}
              active={index <= level ? "on" : "off"}
              onClick={() => {
                if (index < level) setLevel(index);
              }}>
              {index + 1 <= level ? <FaCheck /> : index + 1}
            </LevelTag>
          ))}
        </TagContainers>
        <StageHeading as="h1">{stages[level]}</StageHeading>

        {level === 0 && (
          <CreateGuestForm
            register={register}
            handleSubmit={handleSubmit}
            reset={reset}
            errors={errors}
          />
        )}
        {level === 1 && <SelectCabinForm setBookingData={setBookingData} />}

        <ButtonContainer>
          {level > 0 && (
            <Button onClick={prevLevel} size="medium" variation="primary">
              Previous
            </Button>
          )}
          {level < 1 && (
            <>
              <Button
                onClick={reset}
                type="reset"
                size="medium"
                disabled={isLoading}
                variation="secondary">
                Cancel
              </Button>
              <Button
                onClick={handleSubmit(nextLevel)}
                size="medium"
                disabled={isLoading}
                variation="primary">
                Next
              </Button>
            </>
          )}
          {level == 1 && (
            <Button
              size="medium"
              variation="primary"
              disabled={isLoading}
              onClick={bookCabin}>
              Book Cabin
            </Button>
          )}
        </ButtonContainer>
      </StyledCreateBooking>
    </>
  );
}

export default CreateBooking;
