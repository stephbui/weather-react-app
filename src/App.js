import React from "react";
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Montreal" />
        <footer>
          This project was coded by Stephanie Bui and is {" "}
          <a href="https://github.com/stephbui/weather-react-app" target="_blank">
            open-sourced on GitHub
        </a>
        </footer>
      </div>
    </div>
  );
}
