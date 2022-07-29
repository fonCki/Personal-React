import logo from "./logo.svg";
import alf from "./Alf.png"
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={alf} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="mailto:alfonsoridao@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    alfonsoridao@gmail.com
                </a>
            </header>
        </div>
    );
}

export default App;