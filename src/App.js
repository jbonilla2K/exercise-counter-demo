import "./App.css";
import RepetitionExercise from "./components/RepetitionExercise/index.js";
import DurationExercise from "./components/DurationExercise/index.js";
import Logbook from "./components/Logbook/index.js";
import { useState } from "react";

const menuScreen = 0;
const durScreen = 1;
const repScreen = 2;
const logbookScreen = 3;

function App() {
  let [exerciseData, setExerciseData] = useState([]);

  let [exercise, changeExercise] = useState("none");
  let [curScreen, setScreen] = useState(menuScreen);
  let screen;

  if (curScreen === menuScreen) {
    screen = (
      <>
        <div className="App">
          <div className="elms-group">
            <h1 className="title">
              <span style={{ color: "rgb(8, 194, 8)" }}>You</span>
              <span style={{ color: "rgb(97, 56, 158)" }}>Count</span>
            </h1>
            <div className="items">
              <h3>Tap an exercise to continue.</h3>
              <button
                onClick={() => {
                  changeExercise("Plank");
                  setScreen(durScreen);
                }}
              >
                Plank
              </button>
              <br />
              <button
                onClick={() => {
                  changeExercise("Running");
                  setScreen(durScreen);
                }}
              >
                Running
              </button>
              <br />
              <button
                onClick={() => {
                  changeExercise("Push-Ups");
                  setScreen(repScreen);
                }}
              >
                Push-Ups
              </button>
              <br />
              <button
                onClick={() => {
                  changeExercise("Dips");
                  setScreen(repScreen);
                }}
              >
                Dips
              </button>
              <p>
                <strong>or click below to view your progress.</strong>
              </p>
              <button
                onClick={() => {
                  setScreen(logbookScreen);
                }}
              >
                Logbook
              </button>
            </div>
          </div>
          <br />
        </div>
      </>
    );
  } else if (curScreen === durScreen) {
    screen = (
      <>
        <div className="App">
          <DurationExercise
            setExerciseData={setExerciseData}
            currentExercise={exercise}
            setScreen={setScreen}
            menuScreen={menuScreen}
          />
        </div>
      </>
    );
  } else if (curScreen === repScreen) {
    screen = (
      <>
        <div className="App">
          <RepetitionExercise
            currentExercise={exercise}
            setExerciseData={setExerciseData}
            setScreen={setScreen}
            menuScreen={menuScreen}
          />
        </div>
      </>
    );
  } else if (curScreen === logbookScreen) {
    screen = (
      <>
        <div className="App">
          <Logbook
            data={exerciseData}
            setScreen={setScreen}
            menuScreen={menuScreen}
          />
          <br />
        </div>
      </>
    );
  }
  return screen;
}

export default App;
