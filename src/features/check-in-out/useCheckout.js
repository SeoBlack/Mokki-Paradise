import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function useCheckout() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`, {
        duration: 5000,
      });
      queryClient.invalidateQueries({ active: true });
      navigate("/bookings");
    },
    onError: () => {
      toast.error("there was an error while checking out");
    },
  });

  return { checkout, isCheckingOut };
}
