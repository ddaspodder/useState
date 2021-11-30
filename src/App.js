import { useState } from "react";
import "./styles.css";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpen(!open)}>Open Modal</button>
      {open && <div className="modal">Hi I am a modal !!</div>}
    </div>
  );
}
