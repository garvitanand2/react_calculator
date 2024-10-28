import React from "react";
import "./VariableInputs.css"; // Import the CSS file

const VariableInputs = ({ variables, setVariables }) => {
  const handleVariableChange = (e, variable) => {
    const newVariables = { ...variables, [variable]: Number(e.target.value) };
    setVariables(newVariables);
  };

  return (
    <div className="variable-inputs-container">
      <h3 className="variables-label">Variables:</h3>
      {Object.keys(variables).length === 0 ? (
        <p>No variables detected.</p>
      ) : (
        Object.keys(variables).map((variable) => (
          <div className="variable-item" key={variable}>
            <label>{variable}:</label>
            <input
              type="number"
              value={variables[variable]}
              onChange={(e) => handleVariableChange(e, variable)}
              className="variable-input"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default VariableInputs;
