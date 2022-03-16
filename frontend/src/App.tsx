import { useState } from "react";
import "./App.css";

function App() {
  const apiUrl = import.meta.env.VITE_API_URL as string;
  console.log(apiUrl);

  const [count, setCount] = useState<string | number>("?");

  function onClick() {
    fetch(apiUrl, {
      method: "POST",
    })
      .then((response) => response.text())
      .then((s) => setCount(parseInt(s)));
  }

  return (
    <div className="App">
      <p>apiUrl: _{apiUrl}_</p>
      <p>You clicked me {count} times.</p>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
