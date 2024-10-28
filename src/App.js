import React, { useState, useEffect } from "react";
import FormulaInput from "./components/FormulaInput";
import VariableInputs from "./components/VariableInputs";
import ResultDisplay from "./components/ResultDisplay";
import "./App.css"; // Import the CSS file

const App = () => {
  const [formula, setFormula] = useState("");
  const [variables, setVariables] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const detectVariables = (formula) => {
    const variableRegex = /[a-zA-Z]/g;
    const uniqueVariables = Array.from(new Set(formula.match(variableRegex)));
    const vars = {};
    uniqueVariables.forEach((variable) => {
      vars[variable] = variables[variable] || 0;
    });
    setVariables(vars);
  };

  const evaluateFormula = (formula) => {
    try {
      const replacedFormula = formula.replace(
        /[a-zA-Z]/g,
        (match) => variables[match] || 0
      );
      const evaluatedResult = new Function(`return ${replacedFormula}`)();
      setResult(evaluatedResult);
      setError(null);
    } catch (err) {
      setError("Invalid formula or variable value");
      setResult(null);
    }
  };

  useEffect(() => {
    if (formula) {
      evaluateFormula(formula);
    }
  }, [formula, variables]);

  return (
    <div className="app-container">
      <h1 className="title">Formula Calculator</h1>
      <div className="calculator">
        <FormulaInput
          formula={formula}
          setFormula={setFormula}
          detectVariables={detectVariables}
        />
        <VariableInputs variables={variables} setVariables={setVariables} />
        <ResultDisplay result={result} error={error} />
      </div>
    </div>
  );
};

export default App;

