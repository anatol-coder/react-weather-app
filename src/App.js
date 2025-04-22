import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <header className="App-header btn btn-primary">Hello from React</header>
      <footer>
        This project was coded by Anna Wysota and is{" "}
        <a
          href="https://github.com/anatol-coder/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://silver-gumption-c38209.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
