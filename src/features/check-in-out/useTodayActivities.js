import { useQuery } from "@tanstack/react-query";
import { getTodayActivities } from "../../services/apiBookings";

function useTodayActivities() {
  const { data, isPending } = useQuery({
    queryKey: ["activities"],
    queryFn: getTodayActivities,
  });
  console.log(data);
  return { activities: data?.data, isPending };
}

export default useTodayActivities;
