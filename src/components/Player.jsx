import { useState, useRef } from "react";

function Player() {
  const playerNameInput = useRef();

  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    setPlayerName(playerNameInput.current.value);
    playerNameInput.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerNameInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

export default Player;
