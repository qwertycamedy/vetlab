import { bookingSel, setBookingModal } from "@store/slices/booking/bookingSlice";
import { useDispatch, useSelector } from "react-redux";
import { disableScroll } from "./disableScroll";
import { enableScroll } from "./enableScroll";

export const useBookingModal = () => {
  const dispatch = useDispatch();
  const {bookingModal} = useSelector(bookingSel);

  const onOpenBooking = () => {
    dispatch(setBookingModal(true));
    disableScroll()
  };

  const onCloseBooking = () => {
    dispatch(setBookingModal(false));
    enableScroll()
  };

  const onToggleBooking = () => {
    dispatch(setBookingModal(!bookingModal));
  };

  return { onOpenBooking, onCloseBooking, onToggleBooking, bookingModal };
}