import { useState } from "react";

import CalculatorInput from "./components/CalculatorInput"
import Header from "./components/Header"
import InvestmentProjection from "./components/InvestmentProjection"


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 8000,
    annualInvestment: 5000,
    expectedReturn: 8,
    duration: 10
  });

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue
      }
    });
  };

  return (
    <>
      <Header title="Investment Calculator" />
      <CalculatorInput onChange={handleUserInput} userInput={userInput} />
      <InvestmentProjection input={userInput}/>
    </>
  )
}

export default App
