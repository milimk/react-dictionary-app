import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Dictionary />
      </main>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/milimk" target="_blank" rel="noreferrer">
          MiliM
        </a>{" "}
        and it's{" "}
        <a
          href="https://github.com/milimk/react-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
