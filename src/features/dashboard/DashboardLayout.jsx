import styled from "styled-components";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 36rem auto;
`;

function DashboardLayout() {
  return (
    <StyledLayout>
      <div>Statistics</div>
      <div>Booking</div>
      <div>Stays</div>
      <div>Charts</div>
    </StyledLayout>
  );
}

export default DashboardLayout;
