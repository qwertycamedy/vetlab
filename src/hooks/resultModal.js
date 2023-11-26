import { resultSel, setResultModal } from "@store/slices/result/resultSlice";
import { useDispatch, useSelector } from "react-redux";
import { disableScroll } from "./disableScroll";
import { enableScroll } from "./enableScroll";

export const useResultModal = () => {
  const dispatch = useDispatch();
  const {resultModal} = useSelector(resultSel);

  const onOpenResult = () => {
    dispatch(setResultModal(true));
    disableScroll();
  };

  const onCloseResult = () => {
    dispatch(setResultModal(false));
    enableScroll();
  };

  const onToggleResult = () => {
    dispatch(setResultModal(!resultModal));
  };

  return { onOpenResult, onCloseResult, onToggleResult, resultModal };
}