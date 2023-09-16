import { useState, memo } from "react";
import "./PlayButton.css";
const PlayButton = memo(function PlayButton({
  message,
  children,
  onPlay,
  onPause,
}) {
  const [playing, setPlaying] = useState(false); // dont use this approach
  function handleClick(e) {
    console.log(e);
    // e.stopPropagation();
    // e.peventDefault();
    // recommended
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying(!playing);
  }
  // always modify state
  // always re rendr when state changes

  return (
    <button onClick={handleClick}>
      {children} : {playing ? "||" : ">"}
    </button>
  );
});
export default PlayButton;
