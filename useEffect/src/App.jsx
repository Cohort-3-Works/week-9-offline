import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //let make a counter app and learn about useEffect

  // const [count, setCount] = useState(0);

  // const increaseCount = () => {
  //   console.log("Count is called"); // by this we can see why are we having that side effect issue
  //   setCount(count + 1);
  // };

  // setInterval(increaseCount, 1000);

  //   return (
  //     <>
  //       {/* count is {count} */}
  //       <br />
  //       {/* <button onClick={increaseCount}>Increment</button> */}
  //     </>
  //   );
  // }

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    console.log("Count is called"); // by this we can see why are we having that side effect issue
    setCount(function (currentValue) {
      return currentValue + 1;
    });
  };

  // note --> if you ever want to use a state variable inside a useEffect hook then you need to pass it as a dependency
  useEffect(() => {
    console.log("useEffect is called");
    setInterval(increaseCount, 1000);
  }, []);

  return <div>count is {count}</div>;
}

export default App;
