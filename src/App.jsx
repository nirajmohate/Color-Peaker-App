import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Color Picker App</h1>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ width: "50px", height: "50px", border: "none" }}
        />
        <p style={{ marginTop: "20px", fontSize: "20px" }}>
          Selected Color : <b>{color}</b>
        </p>
        <div
          style={{
            margin: "20px auto",
            width: "100px",
            height: "100px",
            background: color,
            border: "1px solid #000",
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
