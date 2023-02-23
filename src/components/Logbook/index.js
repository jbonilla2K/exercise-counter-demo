import React from "react";

export default function Logbook({ data, setScreen, menuScreen }) {
  let logbook = data.map((exercises, index) => (
    <div key={index}>{exercises}</div>
  ));
  return (
    <>
      <div className="elms-group">
        <h1 className="title">
          <span style={{ color: "rgb(8, 194, 8)" }}>Log</span>
          <span style={{ color: "rgb(97, 56, 158)" }}>book:</span>
        </h1>
        <div className="items">
          <p className="logbook">{logbook}</p>
          <button onClick={() => setScreen(menuScreen)}>Return to Home</button>
        </div>
      </div>
    </>
  );
}
