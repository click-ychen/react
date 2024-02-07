import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [isCounting, setIsCounting] = useState(false);

  const timer = useRef(null);

  const onClickHandler = () => {
    setIsCounting((prev) => !prev);
  };

  useEffect(() => {
    if (isCounting) {
      timer.current = setInterval(() => {
        setCount((prev) => (prev + 1) % 11);
      }, 500);
    } else {
      clearInterval(timer.current);
    }

    return () => clearInterval(timer.current);
  }, [isCounting]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onClickHandler}>{isCounting ? "Stop" : "Start"}</button>
    </div>
  );
}

export default App;
