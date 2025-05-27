import { useState } from "react";
import CreateGuestForm from "../features/authentication/CreateGuestForm";
import Heading from "../ui/Heading";
import styled, { css } from "styled-components";
import Button from "../ui/Button";
import { HiCheck } from "react-icons/hi2";
import SelectCabinForm from "../ui/SelectCabinForm";

const StyledCreateBooking = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const StageHeading = styled.p`
  text-align: center;
  font-size: 2rem;
`;

const LevelTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  border-radius: 8px;
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}
  ${(props) =>
    !props.active &&
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
  justify-content: space-between;
`;

const stages = [
  "Get User's Information",
  "Select Dates and Cabin",
  "Confirm Booking",
];

function CreateBooking() {
  const [level, setLevel] = useState(0);

  const nextLevel = () => {
    setLevel((curr) => curr + 1);
  };

  const prevLevel = () => {
    setLevel((curr) => curr - 1);
  };

  return (
    <>
      <Heading>Book a Cabin for a Guest</Heading>
      <StyledCreateBooking>
        <TagContainers>
          {stages.map((_, index) => (
            <LevelTag
              active={index <= level}
              onClick={() => {
                if (index < level) setLevel(index);
              }}>
              {index + 1 <= level ? <HiCheck /> : index + 1}
            </LevelTag>
          ))}
        </TagContainers>
        <StageHeading as="h3">{stages[level]}</StageHeading>

        {level === 0 && <CreateGuestForm />}
        {level === 1 && <SelectCabinForm />}

        <ButtonContainer>
          <Button onClick={prevLevel} size="medium" variation="primary">
            Previous
          </Button>
          <Button onClick={nextLevel} size="medium" variation="primary">
            Next
          </Button>
        </ButtonContainer>
      </StyledCreateBooking>
    </>
  );
}

export default CreateBooking;
