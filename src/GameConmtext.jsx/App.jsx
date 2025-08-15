// src/App.jsx
import { React } from <React className="dom"></React>; 
import { useGame } from "./context/GameProvider"; // custom hook for game state
import Welcome from "./components/Welcome";
import GameBoard from "./components/GameBoard";
export default function App() {
  const { gameStarted } = useGame(); // get current game status from context

  return (
    <div className="app">
      {gameStarted ? <GameBoard /> : <Welcome />}
    </div>
  );

}