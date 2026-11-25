import api from "@/utils/axios.config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
export const useInitiatePayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (
      payload: InitatePaymentPayload
    ): Promise<Transaction> => {
      const res = await api.post(`/transactions/initiate/`, payload);
      return res.data;
    },
    onSuccess: () => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      queryClient.invalidateQueries({
        queryKey: ["transaction"],
      });
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      queryClient.invalidateQueries({
        queryKey: ["enrollments"],
      });
      toast.success("payment initiated");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.detail || "Failed";
        toast.error(errorMessage);
      } else {
        toast.error("Failed");
      }
    },
  });
};
