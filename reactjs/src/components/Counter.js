import React, { useCallback, useMemo, useRef, useState } from "react";
// function fib(n) {
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
function Counter() {
  const [num, setNum] = useState(40);
  // useState save krte rkta h

  //   setNum is the setter function
  //   state is stored in globally
  let num1 = useRef(0);
  // in useRef always save number
  function handleClick(event) {
    event.stopPropagation();
    // setTimeout(()=>{
    // setNum(num=>num+1,2000)
    // in case multiple clicks
    // setNum(num+1,2000)
    // })
    // num++;
    // state is not changed directly
    // setNum((num) => num + 1);
    // setNum((num) => num + 1);
    // setNum((num) => num + 1);
    num1.current++;

    //

    console.log(num1.current);
  }
  // agr function ko memoized krna h toh useCallbacback vo re render hoke new copy bnadege js mai 2 obj dono k adress alg hoge

  const valueCallback = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }, []);

  const fibMem = useMemo(() => valueCallback(num), [num, valueCallback]);
  // vo vapas se function ko declare hone nhi denge isko glovally rak dege

  return (
    <>
      <h1 style={{ color: "black" }}>
        {num}
        {"   "}
        {/* {num1.current} */}
        {"   "}

        {fibMem}
      </h1>
      <button onClick={handleClick}>ADD</button>
    </>
  );
}

// in ui of react cannot display the local varialbes so to render the ui we make a hook useState

export default Counter;
