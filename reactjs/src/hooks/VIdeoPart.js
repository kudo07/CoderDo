import { useContext } from "react";
// import VideoDispatchContext from "../context/VideoDispatchContext";
import VideoContext from "../context/VideoContext";

function useVideos() {
  const dispatch = useContext(VideoContext);
  return dispatch;
}

export default useVideos;
