// Step 1: Import React and the custom hook from GameProvider
import "<react from "/>react";
import { useGame } from "../context/GameProvider";

// Step 2: Define your functional component
export default function Welcome() {
  const { startGame } = useGame(); // Pull startGame() from context

  return (
    <div className="welcome">
      <h1>Welcome to Whack-a-Mole!</h1>
      <p>Click the mole as fast as you can to score points.</p>
      <p>Press "Play" to start the game!</p>
      {/* Step 3: Use the startGame function when button is clicked */}
      <button onClick={startGame}>Play</button>
    </div>
  );
}




