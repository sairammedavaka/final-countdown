import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevRemainTimer) => prevRemainTimer - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p>{timerIsActive ? "Time is running.." : "Timer is inactive.."}</p>
      </section>
    </>
  );
}

export default TimerChallenge;
