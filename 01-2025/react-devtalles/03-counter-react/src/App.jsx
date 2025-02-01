import "./App.css";
import { FirstApp } from "./components/FirstApp/FirstApp";
import { CounterApp } from "./components/CounterApp/CounterApp";

function App() {
  return (
    <>
      <h2>Vite + React Tutorial with Devtalles</h2>
      <FirstApp />
      <CounterApp initialValue={15} />
    </>
  );
}

export default App;
