import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header className="App-header">
          <a href="https://nours-dictionary.netlify.app/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="fixed-bottom sticky-bottom text-center">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nourlivia/"
            target="_blank"
            rel="noreferrer"
          >
            Nour Ghallale
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/nourgm10/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
