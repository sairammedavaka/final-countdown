import { createPortal } from "react-dom";

function ResultModal({ ref, targetTime, remainingTime, onReset }) {
  const result = remainingTime <= 0;

  const formattedTime = (remainingTime / 1000).toFixed(2);

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={ref} className="result-modal">
      {result && <h2>You Lost</h2>}
      {!result && <h2>Score was: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button type="submit">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

export default ResultModal;
