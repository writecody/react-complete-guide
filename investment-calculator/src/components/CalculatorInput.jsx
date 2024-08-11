import { useState } from "react";

export default function CalculatorInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
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
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input
                        type="number"
                        name="initial-investment" id="initial-investment"
                        required
                        onChange={(event) => handleUserInput('intialInvestment', event.target.value)}
                        value={userInput.initialInvestment}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input
                        type="number"
                        name="annual-investment"
                        id="annual-investment"
                        required
                        onChange={(event) => handleUserInput('annualInvestment', event.target.value)}
                        value={userInput.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input
                        type="number"
                        name="expected-return"
                        id="expected-return"
                        required
                        onChange={(event) => handleUserInput('expectedReturn', event.target.value)}
                        value={userInput.expectedReturn}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input
                        type="number"
                        name="duration"
                        id="duration"
                        required
                        onChange={(event) => handleUserInput('duration', event.target.value)}
                        value={userInput.duration}
                    />
                </p>
            </div>
        </section>
    );
}
