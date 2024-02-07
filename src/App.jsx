import { useEffect, useRef, useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [isCounting, setIsCounting] = useState(false);
  const numbersRef = useRef(new Array(10).fill(0).map((_el, idx) => idx));
  const timer = useRef(null);

  const onClickHandler = () => {
    setIsCounting((prev) => !prev);
  };

  useEffect(() => {
    if (isCounting) {
      timer.current = setInterval(() => {
        if (numbersRef.current.length === 0) {
          numbersRef.current = new Array(10).fill(0).map((_el, idx) => idx);
        }
        const randomIndex = Math.floor(
          Math.random() * numbersRef.current.length
        );
        setCurrentNumber(numbersRef.current[randomIndex]);
        numbersRef.current = numbersRef.current.filter(
          (_, idx) => idx !== randomIndex
        );
      }, 500);
    } else {
      clearInterval(timer.current);
    }

    return () => clearInterval(timer.current);
  }, [isCounting]);

  return (
    <div>
      <p>Current Number: {currentNumber}</p>
      <button onClick={onClickHandler}>{isCounting ? "Stop" : "Start"}</button>
    </div>
  );
}

export default App;
