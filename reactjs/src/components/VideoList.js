// import React, { useContext } from "rea
import Video from "./Video";
import PlayButton from "./PlayButton";
import axios from "axios";
// import VideoContext from "../context/VideoContext";
import useVideos from "../hooks/VIdeoPart";
import { useCallback, useEffect } from "react";
import useVideoDispatch from "../hooks/VideoDispatchPart";

function VideoList({ editVideos }) {
  // const url = "https://my.api.mockaroo.com/data?key=e616f290";
  // const url = "https://jsonplaceholder.typicode.com/todos/1";

  const videos = useVideos();
  // const dispatch = useVideoDispatch();
  // const videos = useVideos();
  // const [videos, setVideos] = useState([]);
  // async function handleClick() {
  //   const res = await axios.get(url);
  //   console.log(res.data);

  //   dispatch({ type: "LOAD", payload: res.data });
  // }
  // useEffect(() => {
  //   handleClick();
  //   // api-call,use
  // }, [dispatch]);
  const play = useCallback(() => console.log("playu"), []);
  const pause = useCallback(() => console.log("ause"), []);
  return (
    <>
      {
        //hof
        videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            channel={video.channel}
            time={video.time}
            verified={video.verified}
            id={video.id}
            // deleteVideos={deleteVideos}
            editVideos={editVideos}
            // dispatch={dispatch}
          >
            <PlayButton message="let-chat-omeday" onPlay={play} onPause={pause}>
              {/* hooks are call in the top level */}
              {video.title}
            </PlayButton>
            {/* children */}
          </Video>
        ))
      }

      {/* <button onClick={handleClick}>Get Videos</button> */}
    </>
  );
}

export default VideoList;
