export default function CalculatorInput({ onChange, userInput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input
                        type="number"
                        name="initial-investment" id="initial-investment"
                        required
                        onChange={(event) => onChange('initialInvestment', event.target.value)}
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
                        onChange={(event) => onChange('annualInvestment', event.target.value)}
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
                        onChange={(event) => onChange('expectedReturn', event.target.value)}
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
                        onChange={(event) => onChange('duration', event.target.value)}
                        value={userInput.duration}
                    />
                </p>
            </div>
            {console.log(userInput)}
        </section>
    );
}
