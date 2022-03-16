import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState<string | number>("?");

  function onClick() {
    fetch(import.meta.env.VITE_API_URL as string, {
      method: "POST",
    })
      .then((response) => response.text())
      .then((s) => setCount(parseInt(s)));
  }

  return (
    <div className="App">
      <p>this is vite _{import.meta.env.VITE_API_URL}_</p>
      <p>You clicked me {count} times.</p>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>Hello Vite + React!</p>
  //       <p>
  //         <button type="button" onClick={() => setCount((count) => count + 1)}>
  //           count is: {count}
  //         </button>
  //       </p>
  //       <p>
  //         Edit <code>App.tsx</code> and save to test HMR updates.
  //       </p>
  //       <p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //         {' | '}
  //         <a
  //           className="App-link"
  //           href="https://vitejs.dev/guide/features.html"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Vite Docs
  //         </a>
  //       </p>
  //     </header>
  //   </div>
  // )
}

export default App;
