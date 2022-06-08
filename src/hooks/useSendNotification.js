import { useDispatch } from "react-redux";
import { uiActions } from "../store/allActions";

function useSendNotification() {
  const dispatch = useDispatch();
  return (notification) => {
    dispatch(uiActions.sendNotification(notification));
  };
}

export default useSendNotification;
