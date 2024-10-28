import React from "react";
import katex from "katex"; // Import the default KaTeX object
import "katex/dist/katex.min.css"; // Import KaTeX CSS for LaTeX rendering
import "./FormulaInput.css"; // Import the CSS file

const FormulaInput = ({ formula, setFormula, detectVariables }) => {
  const handleFormulaChange = (e) => {
    const newFormula = e.target.value;
    setFormula(newFormula);
    detectVariables(newFormula);
  };

  const renderLatex = (input) => {
    try {
      return katex.renderToString(input); // Call renderToString on the katex object
    } catch (error) {
      return "Invalid LaTeX";
    }
  };

  return (
    <div className="formula-input-container">
      <label className="input-label">Enter Formula:</label>
      <input
        type="text"
        value={formula}
        onChange={handleFormulaChange}
        placeholder="e.g., a + b * c"
        className="formula-input"
      />
      <h3 className="latex-label">Formula in LaTeX:</h3>
      <div
        className="latex-display"
        dangerouslySetInnerHTML={{ __html: renderLatex(formula) }}
      />
    </div>
  );
};

export default FormulaInput;
