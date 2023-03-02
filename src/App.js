import "./styles.css";
import useOnline from "./useOnline";

export default function App() {
  const isOnline = useOnline();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{isOnline ? "Online" : "Offline"}</h2>
    </div>
  );
}
