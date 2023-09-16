// import {Video,Thumb} from './components/Video'
// import Video from "./components/Video";
import "./App.css";
// import videosDb from "./data/data";
// import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";
import { useReducer, useState } from "react";
import AddVideoState from "./components/AddVideoState";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideoContext from "./context/VideoContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import Counter from "./components/Counter";
// import Counter from "./components/Counter";
// import ThemeContext from "./context/ThemeContext";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState(ThemeContext);

  function videoReducer(videos, action) {
    // action is the object which is object

    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        // make a copy
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
      // state is returning
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, []);
  // const themeContext = useContext(ThemeContext);
  // console.log(themeContext);/

  // const [videos, setVideos] = useState(videosDb);

  // function addVideos(video) {
  //   dispatch({ type: "ADD", payload: video });
  //   // action : {type:'ADD',payload:video}
  //   // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  // }
  // function deleteVideos(id) {
  //   // setVideos(videos.filter((video) => video.id !== id));
  //   dispatch({ type: "DELETE", payload: id });
  //   // it make a copy which we also want as state cannot be modified
  //   // console.log(id);

  //   // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  // }
  function editVideos(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }
  // function updateVideo(video) {
  //   // const index = videos.findIndex((v) => v.id === video.id);
  //   // const newVideos = [...videos];
  //   // // make a copy
  //   // newVideos.splice(index, 1, video);
  //   // setVideos(newVideos);
  //   dispatch({ type: "UPDATE", payload: video });
  // }
  //props are defined in app level
  //prop
  // let obj = [
  //   {
  //     id: 1,
  //     title: "React js tut",
  //     views: "100K",
  //     channel: "HelloCoder",
  //     time: "1 year ago",
  //     verified: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Node js tut",
  //     views: "100K",
  //     channel: "HelloCoder",
  //     time: "1 year ago",
  //     verified: true,
  //   },
  //   {
  //     id: 3,
  //     title: "veu js tut",
  //     views: "100K",
  //     channel: "HelloCoder",
  //     time: "1 year ago",
  //     verified: false,
  //   },
  // ];
  // component
  // always start the name of component in upper case
  // app
  //for browser component is invisible
  return (
    <div>
      <ThemeContext.Provider value={mode}>
        <VideoContext.Provider value={videos}>
          <VideoDispatchContext.Provider value={dispatch}>
            <Counter />
            <div className={`App ${mode}`}>
              <button
                onClick={() =>
                  setMode(mode === "darkMode" ? "lightMode" : "darkMode")
                }
              >
                CHAND
              </button>
              {/* <AddVideoState dispatch={dispatch} editableVideo={editableVideo} /> */}
              <AddVideoState editableVideo={editableVideo} />

              <VideoList
                editVideos={editVideos}
                // videos={videos}
              />
              {/* <VideoList
              dispatch={dispatch}
              editVideos={editVideos}
              // videos={videos}
            /> */}
            </div>
          </VideoDispatchContext.Provider>
        </VideoContext.Provider>
      </ThemeContext.Provider>
      <Counter />
    </div>
    // {/* this is prop name */}
    // {/*  props now they have been edited and are called props*/}
    // {/* <Thumb></Thumb> */}
    // // <div style={{ clear: "both" }}>
    // //   {/* <PlayButton
    // //     message="let-chat-omeday"
    // //     onPlay={() => console.log("playu")}
    // //     onPause={() => console.log("pause")}
    // //   >
    // //     these are props
    // //     plaay
    // //   </PlayButton> */}
    // //   {/* <PlayButton message="loloi" onSmash={() => alert("Start")}>
    // //     pause
    // //   </PlayButton> */}
    // // </div>
    // {/* <Counter /> */}
  );
}
// we write function and use as tag
export default App;

//  import './App.css';
// C:\Users\hp\Desktop\courses\5coder-dostyt\react js

// function App() {
//   // functional componenet
//   let name = 'react app';
//   let className='App-header';
//   console.log("app");
//   return (
//     <div className="">
//       {/*
//       app and app-header is an attribute
//       we can attach the expression above in */}
//       <div className={className}>
//         {/*
//         <div className="App-header">
//         */}
//         {name}
//         {/*
//         throught variable we can attach name this is called expression
//         */}
//       hello React dev
//       <Demo></Demo>
//       </div>

//     </div>
//   );
// }

// function Demo() {
//   // functional componenet
//   console.log("demo");

//   return (
//     <div className="App">
//       <div className="App-header">
//     Demo
//       <demo></demo>
//       </div>

//     </div>
//   )
//   }

// export default App;

//chPTER 3- CONDITIONAL RENDERING
