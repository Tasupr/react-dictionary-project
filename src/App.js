import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            <img src={logo} className="logo" alt="SheCodes Logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer>
          This project was coded by Tanya Suprunovich
          and is{" "}
          <a
            href="https://github.com/Tasupr/react-dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
           my GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://joyful-hamster-cdb9da.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;