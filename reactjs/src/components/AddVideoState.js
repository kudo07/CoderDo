import React, { useEffect, useRef, useState } from "react";
import "./AddVideoState.css";
import useVideoDispatch from "../hooks/VideoDispatchPart";
// import VideoDispatchContext from "../context/VideoDispatchContext";
function AddVideoState({ editableVideo }) {
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();
  const inputRef = useRef(null);
  const initialState = {
    channel: "HelloCr",
    time: "10 year ago",
    verified: true,
    title: "",
    views: "",
  };

  const [video, setVideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initialState);
  }
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
    // console.log(video);

    // trick
  }
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
    inputRef.current.placeholder = "";
    inputRef.current.focus();
    "type here".split("").forEach((char, i) => {
      setTimeout(() => {
        inputRef.current.placeholder = inputRef.current.placeholder + char;
      }, 100 * i);
    });
  }, [editableVideo]);
  // [] is the dependecy when it is change the useEfeect is triggered when it is change
  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      {/* {video.title}/ */}
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="video"
        value={video.views}
      />
      <button
        onClick={handleSubmit}
        // onClick={() => {
        //   // copy and become state
        // }}
      >
        {editableVideo ? "Edit" : "Add"}
      </button>
    </form>
  );
}

export default AddVideoState;
