import React, { useCallback, useEffect, useState } from "react";
let currentTimer = 0;

export default function DurationExercise({
  currentExercise,
  setExerciseData,
  setScreen,
  menuScreen,
}) {
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);
  let updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);
  useEffect(() => {
    currentTimer = setInterval(updateTimer, 10);
    return () => clearInterval(currentTimer);
  }, [running, updateTimer]);
  let startStop = useCallback(() => {
    setRunning(!running);
    clearInterval(currentTimer);
  }, [running]);
  let reset = useCallback(() => {
    setTimer(0);
    setRunning(false);
    clearInterval(currentTimer);
  }, []);

  let mins = Math.floor((timer / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let mills = (timer % 1000).toString().padStart(3, "0");
  let time = `${mins}:${secs}.${mills}`;

  return (
    <div>
      <div className="elms-group">
        <h1 className="title">
          <span style={{ color: "rgb(8, 194, 8)" }}>Current Exercise: </span>
          <span style={{ color: "rgb(97, 56, 158)" }}>{currentExercise}</span>
        </h1>
        <div className="items">
          <p className="counter">{time}</p>
          <button onClick={startStop}>{running ? "Pause" : "Start"}</button>
          <button onClick={reset}> Reset </button>
          <button
            onClick={() =>
              setExerciseData((exerciseData) => [
                ...exerciseData,
                `Exercise: ${currentExercise} 
                Previous Time: ${time}`,
              ])
            }
          >
            Save Workout
          </button>
          <br />
          <button onClick={() => setScreen(menuScreen)}>Return to Home</button>
        </div>
      </div>
    </div>
  );
}
