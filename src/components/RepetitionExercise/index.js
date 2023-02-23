import React from "react";
import { useState } from "react";

export default function RepetitionExercise({ currentExercise , setExerciseData , setScreen, menuScreen }) {
  let [reps, setReps] = useState(0);
  return (
    <>
      <div>
        <div className="elms-group">
          <h1 className="title">
            <span style={{ color: "rgb(8, 194, 8)" }}>Current Exercise: </span>{" "}
            <br />
            <span style={{ color: "rgb(97, 56, 158)" }}>{currentExercise}</span>
          </h1>
          <div className="items">
            <p className="counter">Rep Count: {reps}</p>
            <button
              onClick={() => {
                setReps(reps + 1);
              }}
            >
              +1 Rep Count
            </button>
            <button
              onClick={() => {
                setReps((reps = 0));
              }}
            >
              Set Reps to 0
            </button>
            <button
              onClick={() =>
                setExerciseData((exerciseData) => [
                  ...exerciseData,
                  `Exercise: ${currentExercise} Rep Count: ${reps}`,
                ])
              }
            >
              Save Workout
            </button>
            <br />
            <button onClick={() => setScreen(menuScreen)}>
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
