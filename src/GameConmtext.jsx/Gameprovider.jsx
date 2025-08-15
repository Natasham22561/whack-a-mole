// src/context/GameProvider.jsx
import React, { createContext, useContext, useState } from "react";

// Create the game context object
const GameContext = createContext();

// Provider component — wraps the app to provide game state
export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(null); // index 0–8
  const [gameStarted, setGameStarted] = useState(false);

  // Start game: reset score and position mole randomly
  const startGame = () => {
    setScore(0);
    setMolePosition(Math.floor(Math.random() * 9));
    setGameStarted(true);
  };

  // Restart: go back to welcome screen
  const restartGame = () => {
    setGameStarted(false);
    setScore(0);
    setMolePosition(null);
  };

  // Handle mole click
  const whackMole = () => {
    setScore((prev) => prev + 1);

    // Optional improvement: ensure mole doesn't appear in the same hole twice in a row
    setMolePosition((prevPosition) => {
      let newPos;
      do {
        newPos = Math.floor(Math.random() * 9);
      } while (newPos === prevPosition);
      return newPos;
    });
  };

  // Provide state & actions to children
  return (
    <GameContext.Provider
      value={{
        score,
        molePosition,
        gameStarted,
        startGame,
        restartGame,
        whackMole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

// Custom hook to consume game context
export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
