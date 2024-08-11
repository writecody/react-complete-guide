import siteLogo from "../assets/investment-calculator-logo.png";

export default function Header({ title }) {
    return (
        <div id="header">
            <img src={siteLogo} alt="Illustration of bag with dollar sign, surrounded by coins" />
            <h1>React Investment Calculator</h1>
        </div>
    );
}
