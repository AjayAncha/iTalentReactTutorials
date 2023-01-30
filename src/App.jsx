import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Practice from "./Practice";
import Getmessages from "./Getmessages";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="dynamic-data">
      <Practice />
      </div>
      <div className="items">
        <Getmessages />
      </div>
    </div>
  );
}

export default App;
