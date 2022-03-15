import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = React.useState<string | number>("?");

  function onClick() {
    fetch(process.env.REACT_APP_API_URL!, {
      method: "POST",
    })
      .then((response) => response.text())
      .then((s) => setCount(parseInt(s)));
  }

  return (
    <div className="App">
      <p>You clicked me {count} times.</p>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
