import styled from "styled-components";

import Heading from "../../ui/Heading";
import Line from "../../ui/Line";
import useTodayActivities from "./useTodayActivities";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayActivity() {
  const { activities, isPending } = useTodayActivities();
  return (
    <StyledToday>
      <Line type="horizontal">
        <Heading as="h3">Today</Heading>
      </Line>

      {isPending ? (
        <Spinner />
      ) : activities?.length > 0 ? (
        <TodayList>
          {activities.map((activity) => (
            <TodayItem key={activity._id} booking={activity} />
          ))}
        </TodayList>
      ) : (
        <NoActivity>No Activity for Today</NoActivity>
      )}
    </StyledToday>
  );
}

export default TodayActivity;
