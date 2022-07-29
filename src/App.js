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
                    href="mailto:alfonso@ridao.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    alfonso@ridao.ar
                </a>
            </header>
        </div>
    );
}

export default App;