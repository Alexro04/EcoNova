import Line from "../ui/Line";
import Heading from "../ui/Heading";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <>
      <Line type="horizontal">
        <Heading>Dashboard</Heading>
        <DashboardFilter />
      </Line>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
