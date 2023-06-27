import "./App.css";
import ApiLoader from "./components/apiLoader";
import Counter from "./components/counter";

function App() {
  return (
    <>
      <h1>Custom Hooks</h1>
      <Counter />
      <h1>Fetch Hooks </h1>
      <ApiLoader />
    </>
  );
}

export default App;
