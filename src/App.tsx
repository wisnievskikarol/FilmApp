import React from "react";
import logo from "./logo.svg";
import "./App.scss";
// import "dotenv/config";

function App() {
  const { REACT_APP_TEST_KEY } = process.env;

  console.log("Kurwa", REACT_APP_TEST_KEY);
  console.log("Kurwa2", process.env.REACT_APP_TEST_KEY);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
