import { useContext, useEffect } from "react";
import "./Video.css";
// import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideoDispatch from "../hooks/VideoDispatchPart";
function Video({
  id,
  title,
  views,
  channel,
  time,
  children,
  verified,

  // deleteVideos,
  // dispatch,
  editVideos,
}) {
  // not recommended props so we use destructuring
  //this is props but we use destructuring manner
  // console.log(props)
  // let topic ="React js";
  // let variable="dark";
  // bgColor="blue"; value killer is the props/

  //for static value direct write otherwise use as an expression

  // become the component independeent from verification so that we can individually decide which channel is verified and which is not
  // let channelJSX;
  // if (verified) {
  //   channelJSX = <div className="channel">{channel}✅</div>;

  // } else {
  //   channelJSX = <div className="channel">{channel}</div>;
  // }
  // not the right way to implement and hard also
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();
  // useEffect(() => {
  //   const idx = setInterval(() => {
  //     console.log("video playing", id);
  //   }, 30000);
  //   // it runs continuously
  //   // clean Up function
  //   return () => {
  //     // unmount
  //     clearInterval(idx);
  //     // jo listenr lgate ho usko htana b pdta h
  //   };
  // }, [id]);
  return (
    <>
      <div className="container">
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          {" "}
          X
        </button>
        <button className="edit" onClick={() => editVideos(id)}>
          edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />

          {/* <></> is the fragment in js the 2 obj cannot sit aside there need is to take the parent  called fragement */}
        </div>

        <div className="title">{title} </div>

        <div className="channel">
          {channel}
          {verified ? "✅" : null}
        </div>
        {/* verified is the prop value  ternarty operator returns and easy to understand things*/}
        {/* if the case is return some thing on ine condition so we use  */}
        {/* {verified
          ? (channelJSX = <div className="channel">{channel}✅</div>)
          : null} */}
        {/* if else is not retrun and cannot return anyting */}
        {/* jsx is the javascript object  we can use variable*/}
        <div className="views">
          {views} views <span> . </span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

//if i remove the div of paerent it give me eroor beacause the video is not the valid componnent
//style={{backgroundColor:'orange'}} inner braces are objec pass

export default Video;

//if i remove the
// function Video(){
//     return <div>Video</div>
// }
// function Thumb(){
//     return <div>Thumb</div>
//     }
// export {Video,Thumb}//key is thumb and value is also thumb`

// chapter -2

//Componenet
// App() is not the right
//</App> is the right

// function App() {return <p>React</p>}

//jsx fragment
// return (
// <p>Name:{name} Age:{age}</p>
// return <p>Name:{name} Age:{age}</p>
// )
// ==> wrong to doing the this

// return (
// <>
// <p>Name:{name} Age:{age}</p>
// return <p>Name:{name} Age:{age}</p>
// </>
// )

// ===> correct way of doing this

//jsx
// <component name="x" age={42}>
// ===>>  this is not closed
// wrong way of doing

/* <component name="x" age={42}/> */

// closed the tag

//jsx
//<component style={{color:'red}}/>
// <component style={{backgroundColor:'red}}/>
//background-color Camel case

//props

//Destructured way of writing props
//<component name='x age age={42}
//function Component({namae,age}){
// return (<p>Name:{name}</p>)
// }

//in destructuring way we can give the default value also

// function Compoennt({name,age}){}

// function component({name,age=42}){}

//normal way of writing
//function Component(props){
// return (<p>Name:{props.name}</p>)
// }

//props
//* <Component>
//   </demo> <== children

//</Component>
//consume the value of the props
// function Component({children}){
//     return ( <div>{children}</div>)
// }
