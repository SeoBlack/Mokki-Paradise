import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export function useChecking() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`, {
        duration: 5000,
      });
      queryClient.invalidateQueries({ active: true });
      navigate("/bookings");
    },
    onError: () => {
      toast.error("there was an error while checking in");
    },
  });

  return { checkin, isCheckingIn };
}
