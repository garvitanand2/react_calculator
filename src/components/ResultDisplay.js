import React from "react";
import "./ResultDisplay.css"; // Import the CSS file

const ResultDisplay = ({ result, error }) => {
  return (
    <div className="result-display-container">
      <h3>Result:</h3>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <p className="result">
          {result !== null ? result : "Enter formula and variable values"}
        </p>
      )}
    </div>
  );
};

export default ResultDisplay;
