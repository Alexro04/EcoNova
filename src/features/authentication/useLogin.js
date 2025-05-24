import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setSession } = useAuth();

  const { mutate: login, isPending } = useMutation({
    mutationFn: (cred) => loginApi(cred),
    onSuccess: (data) => {
      setSession({ access_token: data.access_token });
      queryClient.setQueryData(["user"], data.user_data);
      navigate("/dashboard");
    },
    onError: () => {
      toast.error(`An error occured. Please try again`);
    },
    retry: false,
  });

  return { login, isPending };
}

export default useLogin;
