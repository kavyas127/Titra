import React, { useState } from "react";
import "./App.css";

function App() {
  const [M1, setM1] = useState("");
  const [V1, setV1] = useState("");
  const [M2, setM2] = useState("");
  const [V2, setV2] = useState("");

  const calculateV2 = () => {
    if (M1 && V1 && M2) {
      const result = (M1 * V1) / M2;
      setV2(result.toFixed(2));
    } else {
      alert("Please fill all fields with valid values!");
    }
  };

  return (
    <div className="container">
      <h1>Titration Calculator: M₁V₁ = M₂V₂</h1>
      <div className="input-container">
        <label> M₁ (Molarity 1):
          <input type="number" value={M1} onChange={(e) => setM1(e.target.value)} placeholder="Enter M₁" />
        </label><br></br>
        <label> V₁ (Volume 1):
          <input type="number" value={V1} onChange={(e) => setV1(e.target.value)} placeholder="Enter V₁" />
        </label><br></br>
        <label> M₂ (Molarity 2):
          <input type="number" value={M2} onChange={(e) => setM2(e.target.value)} placeholder="Enter M₂" />
        </label><br></br>
      </div>
      <button onClick={calculateV2}>Calculate V₂</button>
      {V2 && (
        <div className="result">
          <h2>Calculated V₂:</h2>
          <p>{V2}</p>
        </div>
      )}
    </div>
  );
}

export default App;
