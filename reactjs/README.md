chapter-EVENT HANDLER

1)click event hanles the functions 2) 2) function definition in the onClick not the function execution
3)onClick={handleClick}
not - {handleClick()}
we dont want to execute the function

4.We make the two button make them customise with the help children prop 5. name is customise and also the message now we make the action customise 6) we make the function pass the prop into them

7. <PlayButton
   message="let-chat-omeday"
   onClick={() => console.log("playu")} >
   {/_ these are props _/}
   plaay
   </PlayButton>

this onClick is not working in the console as it is define by ourself
these onClick is workin by the html tag only not the tag which is made by ourself, onClick is not workin in the PlayButton is custom events

8.In js u can pass the function as prop we pass the onClick in the PlayButton js

9onClick in app jsx will do nothing but only the things pass the action are make in playButton.js 10. we make the multiple events in the same button custom 11. we make the convention by writing the onDash by reminding the cause of the thigs

12.in react you cant update the variable directly we use the state for that

13.Now we make the invidually customisable button on each video and put the PlayButton put under the Video tag and make the paly button turn into {video.title}

14.event bubbling is the propagates the things from the DOM level

15
