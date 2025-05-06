import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings as updateSettingsApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSettings, isPending: isUpdating } = useMutation({
    mutationFn: toast.promise((data) => updateSettingsApi(data), {
      success: "Settings uploaded successfully",
      loading: "Updating settings...",
      error: "Settings could not be updated",
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
  });

  return { updateSettings, isUpdating };
}
